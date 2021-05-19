import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanForm } from 'src/app/Model/loan-form';
import { LoanService } from 'src/app/Service/loan.service';

@Component({
  selector: 'app-goldloanform',
  templateUrl: './goldloanform.component.html',
  styleUrls: ['./goldloanform.component.css']
})
export class GoldloanformComponent implements OnInit {
    visible:boolean=false;
    loanId:number=0;
    applicant_name:String="";
    date_of_birth:String="";
    age:number=0;
    gender:String="";
    phone_number:number=0;
    landline:number=0;
    religion:String="";
    community:String="";
    nationality:String="";
    email_id:String="";
    martial_status:String="";
    education:String="";
    photo_upload!: File;
    digital_sign!: File;
    annual_income:number=0;
    purpose:String="";
    type_of_gold:String="";
    number_of_ornaments:number=0;
    tenure:number=0;
    loan_amount:number=0;
    account_holder_name:String="";
    account_number:number=0;
    branch_name:String="";
    ifsc_code:number=0;
    payment_mode:String="";
    mode_of_disbursal:String="";
    uploadFile!: File;
    tAddr:String="";
    tpin:number=0;
    pAddr:String="";
    ppin:number=0;
    occupation:String="";
    deoccupation:String="";
    requiredLoan:String="";
    contact:String="";

  constructor(private route:Router,private loanServ:LoanService) { }

  ngOnInit(): void {
  }
  onclick()
  {
 this.route.navigate(["newlogin"]);
  }
  urllink:string="assets/images/propic1.jpg";
  
  urllink1:string="assets/images/uploadsign1.PNG";
  
  urllink2:string="assets/images/uploadsign1.PNG";
  selectFiles(event:any)
  {
    if(event.target.files)
    {
      var reader=new FileReader()
      reader.readAsDataURL(event.target.files[0])
      this.uploadFile=event.target.files[0];
      reader.onload=(event:any)=>
      {
        this.urllink=event.target.result
      }
    }
  }
  selectFiles1(event: any)
  {
    if(event.target.files)
    {
      var reader=new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>
      {
        this.urllink1=event.target.result
      }
    }
  }
  selectFiles2(event:any)
  {
    if(event.target.files)
    {
      var reader=new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>
      {
        this.urllink2=event.target.result
      }
    }
  }
  loan!: LoanForm;
  sub:string="";
  
  saveData()
  {
     this.sub=this.date_of_birth.substring(0,4);
     console.log(this.sub);
      this.age=2021-parseInt(this.sub);
     this.loan=new LoanForm(this.applicant_name,this.date_of_birth,this.age,this.gender,
      this.phone_number,this.landline,this.religion, this.community,this.nationality,this.email_id, this.martial_status,
      this.education,this.uploadFile,this.annual_income,this.purpose,
      this.type_of_gold,this.number_of_ornaments,this.tenure,this.loan_amount,this.account_holder_name,
      this.account_number,this.branch_name,this.ifsc_code,this.payment_mode,this.mode_of_disbursal,this.tAddr,this.tpin,this.pAddr,this.ppin
      ,this.occupation,this.deoccupation,this.requiredLoan,this.contact);
      console.log(this.applicant_name+" "+this.date_of_birth+" "+this.age+" "+this.gender);
    this.loanServ.sendData(this.loan).subscribe((data)=>
    {
      data=this.loan;
      console.log(data);
    })
  }
  updateData()
  {
     this.visible=true;
      this.loan=new LoanForm(this.applicant_name,this.date_of_birth,this.age,this.gender,
      this.phone_number,this.landline,this.religion, this.community,this.nationality,this.email_id, this.martial_status,
      this.education,this.photo_upload,this.annual_income,this.purpose,
      this.type_of_gold,this.number_of_ornaments,this.tenure,this.loan_amount,this.account_holder_name,
      this.account_number,this.branch_name,this.ifsc_code,this.payment_mode,this.mode_of_disbursal,this.tAddr,this.tpin,this.pAddr,this.ppin
      ,this.occupation,this.deoccupation,this.requiredLoan,this.contact);
      this.loanServ.updateLoanData(this.loanId,this.loan).subscribe((data)=>
      {
        data=this.loan;
        console.log(data)
      })
  }
}

