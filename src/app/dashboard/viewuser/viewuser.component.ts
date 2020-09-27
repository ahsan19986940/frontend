import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  id;user;
  constructor(private toastr: ToastrService,private modalService: BsModalService, 
    private userservice: UserService, private modalRef: BsModalRef,) { }

  ngOnInit() {
    this.getUserById(this.id);
  }
  getUserById(id){
    this.userservice.getUserById(id).subscribe(res=>{
      this.user=res;
      console.log(this.user)
    })
  }

}
