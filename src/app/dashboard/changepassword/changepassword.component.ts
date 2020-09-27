import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  userId;responsefromApi;
  constructor(private toastr: ToastrService,
    private userService:UserService,
    private modalService: BsModalService, private modalRef: BsModalRef,) { }

  ngOnInit() {
    this.userId= localStorage.getItem('userId');
  }
  chanegpassword(form: NgForm) {
    let user = {
      userId: this.userId,
      password: form.value.password
    }
    
    this.userService.changepassword(user).subscribe(res=>{
      this.responsefromApi = res;
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
}
