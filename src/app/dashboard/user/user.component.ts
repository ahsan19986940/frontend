import { Component, OnInit } from '@angular/core';
import { AdduserComponent } from '../adduser/adduser.component';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewuserComponent } from '../viewuser/viewuser.component';
import { UserService } from 'src/app/services/user.service';
import { user } from '../../model/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList=[
    {fullname:'Ahsan', username:'1998', password:'12345678', dateTime:'123', role:'user' }
  ]
  modalRef: BsModalRef;
  userlist: user[];
  user;length = 0;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private modalService: BsModalService, private userservice: UserService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: false,
      processing:false,
      searching: true,
      responsive: true,
      autoWidth:false,
      retrieve: true,
      destroy: true,
      deferRender: true,
    };
    this.getAllUsers();
  }
  insertJobTicketModal() {
      this.modalRef = this.modalService.show(AdduserComponent, { class: 'modal-lg' });
      this.modalService.onHide.subscribe((reason: string) => {
        this.getAllUsers();
  
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  viewUser(id){
    console.log(id)
    this.modalRef = this.modalService.show(ViewuserComponent, {
      initialState: {id}, class: 'modal-lg'});

  }
  getAllUsers(){
    this.userservice.getAllUser().subscribe(res=>{
      this.user=res;
      this.userlist=this.user;
      this.length =this.userlist.length;
      
      this.dtTrigger.next();
    })
  }
}
