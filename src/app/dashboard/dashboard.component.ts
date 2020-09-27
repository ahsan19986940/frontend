import { Component, OnInit } from '@angular/core';
import { AgmMap, MapsAPILoader, AgmGeocoder } from '@agm/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role;responsefromApi;
  modalRef: BsModalRef;
  id;fullname;
  currentLocation: any;
  responsefromapi;
  showNav =true;
  constructor(private modalService: BsModalService,private googlemap: MapsAPILoader, private userservice: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.role =localStorage.getItem('role');
    this.id= localStorage.getItem('userId');
    this.fullname= localStorage.getItem('fullname');
  }
  logout(){
    this.userservice.logout();
  }
  changepassword(){
    this.modalRef = this.modalService.show(ChangepasswordComponent, { class: 'modal-lg' });
      
  }
  showSideNav(){
    
    this.showNav = ! this.showNav;
  }
}
