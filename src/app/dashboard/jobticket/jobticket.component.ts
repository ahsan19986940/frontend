import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { InsertjobticketComponent } from '../insertjobticket/insertjobticket.component';
import { ViewjobticketComponent } from '../viewjobticket/viewjobticket.component';
import { JobticketService } from 'src/app/services/jobticket/jobticket.service';
import { UserService } from 'src/app/services/user.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { ClosejobticketComponent } from '../closejobticket/closejobticket.component';

@Component({
  selector: 'app-jobticket',
  templateUrl: './jobticket.component.html',
  styleUrls: ['./jobticket.component.css']
})
export class JobticketComponent implements OnInit {
  jobTicketList = []
  modalRef: BsModalRef;

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  user; length = 0;
  constructor(private modalService: BsModalService,
    private userservice: UserService, private jobservice: JobticketService,
    private categoryService: CategoryService, private toastr: ToastrService) { }

  ngOnInit() {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: false,
      processing: false,
      searching: true,
      responsive: true,
      autoWidth: false,
      retrieve: true,
      destroy: true,
      deferRender: true,
    };
    this.getAllJobTicket();
  }

  insertJobTicketModal() {
    this.modalRef = this.modalService.show(InsertjobticketComponent, { class: 'modal-lg' });
    this.modalService.onHide.subscribe((reason: string) => {
      this.getAllJobTicket();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  viewJobTicketModal(id) {
    this.modalRef = this.modalService.show(ViewjobticketComponent, {
      initialState: { id }, class: 'modal-lg'
    });

  }
  
  closeJobTicketModal(id) {
    this.modalRef = this.modalService.show(ClosejobticketComponent, {
      initialState: { id }, class: 'modal-lg'
    });
    this.modalService.onHide.subscribe((reason: string) => {
      this.getAllJobTicket();
    });

  }
  response = false;
  getAllJobTicket() {
    this.jobservice.getAllJobTicket().subscribe(res => {
      this.user = res;
      this.jobTicketList = this.user;
      console.log(this.jobTicketList);
      this.length = this.jobTicketList.length;
      for (let i = 0; i < this.jobTicketList.length; i++) {
        console.log(this.jobTicketList[i].userId);

        this.userservice.getUserById(this.jobTicketList[i].userId).subscribe(res => {
          this.jobTicketList[i].user = res;
          console.log(res);
        })
        this.categoryService.getCategoryById(this.jobTicketList[i].categoryId).subscribe(res => {
          this.jobTicketList[i].category = res;
          console.log(res);
          
        })
      }
      console.log(this.jobTicketList)
      this.response =true;
      this.dtTrigger.next();
    })
  }
  responsefromApi;
  
}
