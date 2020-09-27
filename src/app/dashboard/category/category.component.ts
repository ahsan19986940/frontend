import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { InsertjobticketComponent } from '../insertjobticket/insertjobticket.component';
import { ViewjobticketComponent } from '../viewjobticket/viewjobticket.component';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList = []
  responsefromApi;
  modalRef: BsModalRef;
  category;length=0;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private modalService: BsModalService,private toastr: ToastrService, private categoryservice:CategoryService) { }

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
    this.getAllCategory();
  }
  insertCategoryModal() {
    this.modalRef = this.modalService.show(AddcategoryComponent, { class: 'modal-lg' });
    this.modalService.onHide.subscribe((reason: string) => {
      this.getAllCategory();

    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getAllCategory(){
    this.categoryservice.getAllCategory().subscribe(res=>{
      this.category=res;
      this.categoryList=this.category;
      this.length =this.categoryList.length;
      
      this.dtTrigger.next();
    })
  }
  removeCategory(id,name){
    if(confirm("Are you sure you want to delete "+name)) {
      this.categoryservice.removeCategory(id).subscribe(res=>{
        this.responsefromApi= res;
      if(this.responsefromApi.status){
        this.toastr.success(this.responsefromApi.message);
        this.getAllCategory();
      }
      else{
        this.toastr.warning(this.responsefromApi.message);
        this.getAllCategory();
      }
      })
    }
  }

}
