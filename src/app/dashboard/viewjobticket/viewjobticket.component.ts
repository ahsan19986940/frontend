import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { JobticketService } from 'src/app/services/jobticket/jobticket.service';
import { UserService } from 'src/app/services/user.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-viewjobticket',
  templateUrl: './viewjobticket.component.html',
  styleUrls: ['./viewjobticket.component.css']
})
export class ViewjobticketComponent implements OnInit {
  id;
  constructor(private toastr: ToastrService,private userservice: UserService, private categoryService: CategoryService,
    private service: JobticketService,private modalService: BsModalService, private modalRef: BsModalRef,) { }
    user;
  ngOnInit() {
    console.log(this.id)
    this.getJobTicketbyId();
  }
  getJobTicketbyId(){
    this.service.getJobTicketById(this.id).subscribe(res=>{
      this.user=res;
      console.log(this.user)
      
      this.userservice.getUserById(this.user.userId).subscribe(res=>{
        this.user.user = res;
        console.log(res)
        
      this.categoryService.getCategoryById(this.user.categoryId).subscribe(res=>{
        this.user.category = res;
        console.log(res)
      })
      })
    })
  }

}
