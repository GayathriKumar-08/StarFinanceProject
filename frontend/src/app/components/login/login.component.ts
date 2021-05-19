import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  title = 'login';
  isVisible=false;
  removeSignup=true;

 // @ViewChild('ngOtpInput') ngOtpInputRef:any;//Get reference using ViewChild and the specified hash
 // yourMethod(){
  //  this.ngOtpInputRef.setValue();//yourvalue can be any string or number eg. 1234 or '1234'
 // }
  
  public onSendOtp()
  {
    this.isVisible=true;
    this.removeSignup=false;
  }
   onClick()
  {
      this.route.navigate(["dashboard"]);
  }
  ngOnInit(): void {
  }

}
