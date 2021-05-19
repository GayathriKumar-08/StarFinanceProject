import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepno',
  templateUrl: './changepno.component.html',
  styleUrls: ['./changepno.component.css']
})
export class ChangepnoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  validPattern = "^[0-9]*$";
  form = new FormGroup(
    {
      oldpno: new FormControl('', [Validators.required,Validators.pattern(this.validPattern),Validators.minLength(10),Validators.maxLength(10)]),
      newpno: new FormControl('', [Validators.required,Validators.pattern(this.validPattern),Validators.minLength(10),Validators.maxLength(10)]),
    }
  );
 
}
