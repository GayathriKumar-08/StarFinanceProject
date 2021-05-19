import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewloginpageComponent } from './components/newloginpage/newloginpage.component';
import { LoanformComponent } from './components/loanform/loanform.component';
import { LandingComponent } from './components/landing/landing.component';
import { ChangepnoComponent } from './components/changepno/changepno.component';
import { SamplenavComponent } from './components/samplenav/samplenav.component';
import { KycdocumentComponent } from './components/kycdocument/kycdocument.component';
import { NavsectionComponent } from './components/navsection/navsection.component';
import { KycrulebookComponent } from './components/kycrulebook/kycrulebook.component';
import { EmicalComponent } from './components/emical/emical.component';
import { GoldloancalcComponent } from './components/goldloancalc/goldloancalc.component';
import { EmiComponent } from './components/emi/emi.component';
import { SignupComponent } from './components/signup/signup.component';
import { GoldloanformComponent } from './components/goldloanform/goldloanform.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { LoanDataPreviewComponent } from './components/loan-data-preview/loan-data-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewloginpageComponent,
    LoanformComponent,
    LandingComponent,
    ChangepnoComponent,
    SamplenavComponent,
    KycdocumentComponent,
    NavsectionComponent,
    KycrulebookComponent,
    EmicalComponent,
    GoldloancalcComponent,
    EmiComponent,
    SignupComponent,
    GoldloanformComponent,
    LoanDetailsComponent,
    LoanDataPreviewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
