import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangepnoComponent } from './components/changepno/changepno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmiComponent } from './components/emi/emi.component';
import { EmicalComponent } from './components/emical/emical.component';
import { GoldloancalcComponent } from './components/goldloancalc/goldloancalc.component';
import { GoldloanformComponent } from './components/goldloanform/goldloanform.component';

import { KycdocumentComponent } from './components/kycdocument/kycdocument.component';
import { KycrulebookComponent } from './components/kycrulebook/kycrulebook.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoanDataPreviewComponent } from './components/loan-data-preview/loan-data-preview.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { LoanformComponent } from './components/loanform/loanform.component';

import { NewloginpageComponent } from './components/newloginpage/newloginpage.component';

import { SamplenavComponent } from './components/samplenav/samplenav.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"", component:LandingComponent},
  {path:'landing', component:LandingComponent},
  //{path:'login', component:LoginComponent},
  {path:"sample", component:SamplenavComponent},
  {path:'newlogin', component:NewloginpageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:'signup', component:SignupComponent},
  
  {path:'changepno', component:ChangepnoComponent},
  {path:'loanform', component:LoanformComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'kycdocument', component:KycdocumentComponent},
  {path:'kycruleguide', component:KycrulebookComponent},
  {path:'emical', component:EmicalComponent},
  {path:'goldloancalc', component:GoldloancalcComponent},
  {path:'emi', component:EmiComponent},
 {path:'signup',component:SignupComponent},
 {path:'goldloanform',component:GoldloanformComponent},
 {path:'loanpreview',component:LoanDataPreviewComponent},
 {path:'loandetails',component:LoanDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
