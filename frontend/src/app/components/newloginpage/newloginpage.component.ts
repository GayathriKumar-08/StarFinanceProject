import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/Model/register';
import { OauthService } from 'src/app/Service/oauth.service';
import { RegisterService } from 'src/app/Service/register.service';

@Component({
  selector: 'app-newloginpage',
  templateUrl: './newloginpage.component.html',
  styleUrls: ['./newloginpage.component.css']
})
export class NewloginpageComponent implements OnInit {
  reg: Register;

  customer_name: string;
  email: string;
  phone_no: number;
  address: string;

  validators = {
    userName: ['', Validators.required],
    address: ['', Validators.required],
    phoneNum: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, this.emailDomain]],
    pincode: ['', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$")]],
    branch: ['', Validators.required]
  }
  registerForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(private route: Router, private register: RegisterService, private fb: FormBuilder,private oauths:OauthService) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group(this.validators);

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

  }

  isVisible = false;
  removeSignup = true;

  public onSendOtp() {
    this.isVisible = true;
    this.removeSignup = false;
  }
  onClick() {
    this.route.navigate(["dashboard"]);
  }

  onSaveData() {
    if(this.registerForm.controls.value==undefined)
    {
      this.submitted=true;
    }

      const reg=new Register(this.registerForm.get('userName')?.value,this.registerForm.get('email')?.value,this.registerForm.get('phoneNum')?.value,this.registerForm.get('address')?.value);
      console.log(reg)
      this.register.saveData(reg).subscribe((data)=>
      {
        console.log(data);
      })
  }
  onClear() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.clearValidators();

  }
  onOauth()
  {
    this.oauths.navigate();
    //this.route.navigate(["/dashboard"]);
    
  }
  get f() {
    return this.registerForm.controls;
  }
  emailDomain(control: AbstractControl): { [key: string]: any } | null {
    const email: String = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1)
    if (email == '' || domain.toLowerCase() === "gmail.com") {
      return null;
    }
    else {
      return { 'emailDomain': true };
    }
  }
  
}
