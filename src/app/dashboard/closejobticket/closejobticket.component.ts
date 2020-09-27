import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgmMap, MapsAPILoader, AgmGeocoder } from '@agm/core';
import { UserService } from '../../services/user.service';
import { category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { JobticketService } from 'src/app/services/jobticket/jobticket.service';

@Component({
  selector: 'app-closejobticket',
  templateUrl: './closejobticket.component.html',
  styleUrls: ['./closejobticket.component.css']
})
export class ClosejobticketComponent implements OnInit {
  currentLocation: any;

  profileImg: File = null;
  userId;
  imgURL;responsefromApi;
  constructor(private toastr: ToastrService,private jobticketService:JobticketService,
    private googlemap: MapsAPILoader,

    private categoryService: CategoryService, private modalService: BsModalService, private modalRef: BsModalRef,) { }
  id;

  ngOnInit() {
    this.getLocation();
  }
  onSelectedFile(event) {
    this.profileImg = event.target.file;
  }

    
  onImagesUpload(event) {
    if (event.target.files.length === 0)
      return;

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastr.warning("Only images are supported");
      return;
    }

    var reader = new FileReader();
    this.profileImg = event.target.files;
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }
  removeImage(){
    this.imgURL=null;
  }
  responseAPi;
  imageUpload(id){
    console.log(id);
    this.jobticketService.closeImage(this.profileImg, id)
      .subscribe(res => {
        this.responseAPi= res;
        if(this.responseAPi){
          this.toastr.success('Job Ticket Image Uploaded!'); 
          this.modalRef.hide();     
        }
        else{
          this.toastr.error('Image Cannot be Updated!');
          this.modalRef.hide();
        }
      },
      error => {
        console.log(error)
        this.toastr.error('Image Cannot be Updated!');
      }
    );
  }
  
  addJobTicket(form: NgForm) {
    if(this.profileImg){
      let body = {
        id: this.id,
        closedOn: Date.now(),
        locationClose: this.currentLocation
      }
      console.log(body);
      this.jobticketService.updateJobTicket(body).subscribe(res => {
        this.responsefromApi = res;
        if (this.responsefromApi.status) {
          this.toastr.success(this.responsefromApi.message);
          this.imageUpload(this.id)
        }
        else {
          this.toastr.warning(this.responsefromApi.message);
        }
      })
  
    }
    else{
      this.toastr.warning('Please Select job Ticket Image');
    }
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        console.log(longitude, latitude)

        let that = this;
        this.googlemap.load().then(() => {
          let geocoder = new google.maps.Geocoder;
          let latlng = { lat: latitude, lng: longitude };

          geocoder.geocode({ 'location': latlng }, function (results) {
            if (results[0]) {
              that.currentLocation = results[0].formatted_address;
              console.log(that.currentLocation);
              
            } else {
              console.log('Not found');
            }
          });
        });

      });
    } else {
      console.log("No support for geolocation")
    }
  }
}
