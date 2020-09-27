import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './dashboard/addcategory/addcategory.component';
import { AdduserComponent } from './dashboard/adduser/adduser.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { ClosejobticketComponent } from './dashboard/closejobticket/closejobticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './dashboard/index/index.component';
import { InsertjobticketComponent } from './dashboard/insertjobticket/insertjobticket.component';
import { JobticketComponent } from './dashboard/jobticket/jobticket.component';
import { RoutinechecklistComponent } from './dashboard/routinechecklist/routinechecklist.component';
import { UpdatejobticketComponent } from './dashboard/updatejobticket/updatejobticket.component';
import { UpdateuserComponent } from './dashboard/updateuser/updateuser.component';
import { UserComponent } from './dashboard/user/user.component';
import { ViewjobticketComponent } from './dashboard/viewjobticket/viewjobticket.component';
import { ViewuserComponent } from './dashboard/viewuser/viewuser.component';
import { WorkerjobticketComponent } from './dashboard/workerjobticket/workerjobticket.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard',  component: DashboardComponent, 
  children:[
      { path: '', redirectTo: 'index', pathMatch: 'prefix' },
      { path: 'index', component: IndexComponent, },
      
      { path: 'category', component: CategoryComponent},
      { path: 'insertCategory', component: AddcategoryComponent},
      
      { path: 'jobTicket', component: JobticketComponent},
      { path: 'insertJobTicket', component: InsertjobticketComponent},
      { path: 'closeJobTicket', component: ClosejobticketComponent},
      { path: 'updateJobticket', component: UpdatejobticketComponent},
      { path: 'viewJobTicket', component: ViewjobticketComponent},
      { path: 'workerJobTicket', component: WorkerjobticketComponent},
      
      { path: 'routineChecklist', component: RoutinechecklistComponent},

      { path: 'manageUser', component: UserComponent},
      { path: 'addUser', component: AdduserComponent},
      { path: 'viewUser', component: ViewuserComponent},
      { path: 'updateUser', component: UpdateuserComponent},
      { path: 'changePassword', component: ChangepasswordComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
