import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newloginpage',
  templateUrl: './newloginpage.component.html',
  styleUrls: ['./newloginpage.component.css']
})
export class NewloginpageComponent implements OnInit {

  constructor(private route:Router) { }
  isVisible=false;
  removeSignup=true;
  
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

}
