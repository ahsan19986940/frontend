import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CheckboxControlValueAccessor, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgmMap, MapsAPILoader, AgmGeocoder } from '@agm/core';
import { category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  dateNow=Date.now();
  
  responsefromApi;
  category;
  categorylist: category[];
  constructor(private toastr: ToastrService, private categoryservice: CategoryService,
    private modalService: BsModalService, private modalRef: BsModalRef) { }

  ngOnInit() {
  }
  addCategory(form: NgForm) {
    let user = {
      title: form.value.title,
      createdOn: Date.now(),
    }
    this.categoryservice.addCategory(user).subscribe(res=>{
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

}
