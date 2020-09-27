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
  selector: 'app-insertjobticket',
  templateUrl: './insertjobticket.component.html',
  styleUrls: ['./insertjobticket.component.css']
})
export class InsertjobticketComponent implements OnInit {
  currentLocation: any;
  profileImg: File = null;
  userId;
  imgURL;responsefromApi;
  category;length=0;  categoryList = [];
  constructor(private toastr: ToastrService,private jobticketService:JobticketService,
    private googlemap: MapsAPILoader,
    private categoryService: CategoryService, private modalService: BsModalService, private modalRef: BsModalRef,) { }
    ticketId;
  ngOnInit() {
    this.getLocation();
    this.getAllCategory();
    this.userId= localStorage.getItem('userId');
  }
  getAllCategory(){
    this.categoryService.getAllCategory().subscribe(res=>{
      this.category=res;
      this.categoryList=this.category;
      this.length =this.categoryList.length;
      
    })
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
    this.jobticketService.addImage(this.profileImg, id)
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
      let user = {
        categoryId : form.value.categoryId,
        userId : this.userId,
        status : 'Ongoing',
        createdOn : Date.now(),
        imageName : 'none',
        location: this.currentLocation
      }
      this.jobticketService.addJobTicket(user).subscribe(res=>{
        this.responsefromApi= res;
        if(this.responsefromApi.status){
          this.toastr.success(this.responsefromApi.message);
          this.ticketId = this.responsefromApi.id;
            console.log(true);
            this.imageUpload(this.ticketId);
          
        }
        else{
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
