import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobticketComponent } from './dashboard/jobticket/jobticket.component';
import { InsertjobticketComponent } from './dashboard/insertjobticket/insertjobticket.component';
import { RoutinechecklistComponent } from './dashboard/routinechecklist/routinechecklist.component';
import { ClosejobticketComponent } from './dashboard/closejobticket/closejobticket.component';
import { IndexComponent } from './dashboard/index/index.component';

import { FormsModule }   from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { UserComponent } from './dashboard/user/user.component';
import { AdduserComponent } from './dashboard/adduser/adduser.component';
import { ViewuserComponent } from './dashboard/viewuser/viewuser.component';
import { ViewjobticketComponent } from './dashboard/viewjobticket/viewjobticket.component';
import { HttpClientModule } from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
import { CategoryComponent } from './dashboard/category/category.component';
import { AddcategoryComponent } from './dashboard/addcategory/addcategory.component';
import { UpdatejobticketComponent } from './dashboard/updatejobticket/updatejobticket.component';
import { UpdateuserComponent } from './dashboard/updateuser/updateuser.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { WorkerjobticketComponent } from './dashboard/workerjobticket/workerjobticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    JobticketComponent,
    InsertjobticketComponent,
    RoutinechecklistComponent,
    ClosejobticketComponent,
    IndexComponent,
    UserComponent,
    AdduserComponent,
    ViewuserComponent,
    ViewjobticketComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatejobticketComponent,
    UpdateuserComponent,
    ChangepasswordComponent,
    WorkerjobticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCm1IG0fxbnwS-S4RI74yDHI8tU80vfn8Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
