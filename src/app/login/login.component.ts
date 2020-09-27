import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgmMap, MapsAPILoader, AgmGeocoder } from '@agm/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentLocation: any;
  responsefromapi;id;
  responseFromApi;
  constructor(private toastr: ToastrService, private UserService: UserService,
    private router: Router, private googlemap: MapsAPILoader,) { }

  ngOnInit() {
    this.getLocation();
  }

  loginUser(form: NgForm) {
    let user = {
      username: form.value.username,
      password: form.value.password,
      role: form.value.role,
      location: this.currentLocation,
      lastLogin: Date.now(),
    }
    console.log(user)
    this.UserService.login(user).subscribe(
      res => {
        this.responseFromApi = res;
        if(this.responseFromApi.status){
          console.log(res)
        
          var fullname = this.responseFromApi.fullname;
          this.id= this.responseFromApi.userId;
          localStorage.setItem('userId', this.responseFromApi.userId);
          localStorage.setItem('fullname', this.responseFromApi.fullname);
          //localStorage.setItem('id_token', this.responseFromApi.token);
          localStorage.setItem('role', form.value.role);
          
          localStorage.setItem('loggedIn', 'true');
  
          if (form.value.role == 'Admin') {
            this.toastr.success("Login Successful");
            this.toastr.success('Welcome Admin!');
            this.router.navigate(['dashboard']);
            this.updateLocation(this.id);
          }
          else if (form.value.role == 'Worker') {
            this.toastr.success("Login Successful");
            this.toastr.success('Welcome Worker! ' + fullname);
            this.router.navigate(['dashboard']);
            this.updateLocation(this.id);

          }
        }
        else{
          this.toastr.warning(this.responseFromApi.message)
        }
        
      },
      error => {
        this.toastr.error('Invalid Credentials!');
        console.log(error);
      }
    );
  }
  updateLocation(uid){
    let data= {
      location:this.currentLocation,
      id:uid,
      lastLogin: Date.now()
    }
    console.log(data)
    this.UserService.updateLocation(data).subscribe(res=>{
      this.responsefromapi=res;
      if(this.responsefromapi.status){
        this.toastr.success(this.responsefromapi.message);
      }
      else{
        this.toastr.warning(this.responsefromapi.message);
      }
    },
    error=>{
      this.toastr.warning('Location cannot be Updated right now');

    })
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
