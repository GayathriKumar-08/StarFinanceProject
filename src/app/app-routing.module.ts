import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanformComponent } from './components/loanform/loanform.component';
import { LoginComponent } from './components/login/login.component';
import { NewloginpageComponent } from './components/newloginpage/newloginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"", component:NewloginpageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'register', component:RegisterpageComponent},
  {path:'newlogin', component:NewloginpageComponent},
  {path:'loanform', component:LoanformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
