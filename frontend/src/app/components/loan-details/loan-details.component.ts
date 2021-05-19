import { Component, OnInit,ElementRef ,ViewChild } from '@angular/core';
import { LoanForm } from '../../Model/loan-form';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { LoanService } from 'src/app/Service/loan.service';
@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css'],
  
})
export class LoanDetailsComponent implements OnInit {
  constructor(private loanserv:LoanService) { }
  requiredLoan:String="";
  loan:LoanForm[]=[];
  ngOnInit(): void {
  }
  fetchDetails()
  {
    this.loanserv.fetchAllLoan().subscribe((data:any)=>
    {
      this.loan=data;
      console.log(this.loan)
    })
  }
  
  generatePDF()
  {
   var data=document.getElementById("tableCon")!
   html2canvas(data).then((canvas)=>
   {
    var imgWidth = 298;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
     
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a3'); 
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('loanDetails.pdf'); 
    });
    }
    fetchDetailsByIncome()
    {
      this.loanserv.fetchLoanDataByIncome().subscribe((data:any)=>
      {
        this.loan=data;
      })
    }
    fetchByLoan()
    {
      console.log(this.requiredLoan)
      this.loanserv.fetchByLoanType(this.requiredLoan).subscribe((data:any)=>
      {
        this.loan=data;
        console.log(this.loan)
      });
    }
  }

  