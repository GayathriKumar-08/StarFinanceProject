import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

form=new FormGroup(
  {
     username:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required),
     cpassword:new FormControl('',Validators.required),
     email:new FormControl('', [Validators.required,Validators.maxLength(8)]),
     Phonenumber:new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  }
)
  constructor() { }

  ngOnInit(): void {

  }
 
  handleClick()
  {
    alert("Registered successfully!!!");
  }

}
