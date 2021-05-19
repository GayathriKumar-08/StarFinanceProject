import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kycdocmodel } from 'src/app/Model/Kycdocmodel';
import { KycdocService } from 'src/app/Service/kycdoc.service';

@Component({
  selector: 'app-kycdocument',
  templateUrl: './kycdocument.component.html',
  styleUrls: ['./kycdocument.component.css']
})
export class KycdocumentComponent implements OnInit {

  kyc:Kycdocmodel;



  constructor(private kservice:KycdocService) { }
  isVisible = false;
  isVisible1 = false;
  isVisible2 = false;
  isVisible3 = false;
  isVisible4 = false;

  urllink: string = "assets/images/docup.png";


  selectFiles(event) {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.urllink = event.target.result
      }
    }
  }

  public onSelect() {
    this.isVisible = true;
    this.isVisible1 = false;
    this.isVisible1 = false;
    this.isVisible2 = false;
    this.isVisible3 = false;
    this.isVisible4 = false;
  }
  public onSelect1() {
    this.isVisible1 = true;
    this.isVisible = false;
  }
  public onSelect2() {
    this.isVisible2 = true;
    this.isVisible3 = false;
    this.isVisible4 = false;
  }
  public onSelect3() {
    this.isVisible3 = true;
    this.isVisible2 = false;
    this.isVisible4 = false;

  }
  public onSelect4() {
    this.isVisible4 = true;
    this.isVisible2 = false;
    this.isVisible3 = false;

  }

  validPattern = "^[0-9]*$";
  pattern1="^[a-zA-Z0-9]{10}$]"
  pattern2="^[a-zA-Z0-9]{15}$]"
  form = new FormGroup(
    {
      aadhar: new FormControl('', [Validators.required,Validators.pattern(this.validPattern),Validators.maxLength(16)]),
      pan:new FormControl('',[Validators.required,Validators.pattern(this.pattern1),Validators.maxLength(11)]),
      driving:new FormControl('',[Validators.required,Validators.pattern(this.pattern2),Validators.maxLength(16)]),
    }
  );
  kycForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
  }
  aadhar:number;

  
  onClick(aadhar:number)
  {
    this.aadhar=aadhar;
    console.log(aadhar);
  }

}
