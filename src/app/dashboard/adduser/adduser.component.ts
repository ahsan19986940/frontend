import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CheckboxControlValueAccessor, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgmMap, MapsAPILoader, AgmGeocoder } from '@agm/core';
import { UserService } from '../../services/user.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  responsefromApi;
  user;
  userlist: user[];
  constructor(private toastr: ToastrService, private userservice: UserService,
    private modalService: BsModalService, private modalRef: BsModalRef) { }

  ngOnInit() {
    this.getUsername();
  }
  getUsername() {
    this.userservice.getUsername().subscribe(res => {
      this.user = res;
      this.userlist = this.user;
    })
  }
  addData(user) {
    console.log(true);
    this.userservice.addUser(user).subscribe(res=>{
      this.responsefromApi= res;
      if(this.responsefromApi.status){
        this.toastr.success(this.responsefromApi.message);
        this.modalRef.hide();
      }
      else{
        this.toastr.warning(this.responsefromApi.message);
        this.modalRef.hide()
      }
    })

  }
 username
 dbUsername;
  checkUser(){
    for (let i = 0; i < this.userlist.length; i++) {
      this.dbUsername =this.userlist[i].username;
      if (this.dbUsername === this.username) {
        this.dbUsername =null;
        return false
      }
    }
    if(this.dbUsername !== null){
      return true
    }
  }
  addUser(form: NgForm) {
    let user = {
      fullname: form.value.fullname,
      username: form.value.username,
      password: form.value.password,
      role: form.value.role,
      location: 'none',
      createdOn: Date.now(),
    }
    this.username = form.value.username;
    if(this.checkUser()){

      this.toastr.success('Unique Username');
      this.addData(user);
    }
    else{
      this.toastr.warning('Username Already Exist')
    }
  }
}