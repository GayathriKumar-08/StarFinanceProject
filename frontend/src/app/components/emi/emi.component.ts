import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  
  loanamt:number=0;
  loanten:number=0;
  emi:number=0;
  interest:number=0;
  res:number=0;
  a:number=5;
  b:number=10;
  constructor() { }

  ngOnInit(): void {
    
  }

  onClick()
  {
    if(this.loanamt < 100000)
    {
      this.interest=this.loanamt * (0.10);
      console.log(this.interest);
      this.res=this.interest+this.loanamt;
      console.log(this.res);
      this.emi=this.res/this.loanten;
      this.emi=Math.round(this.emi);
      console.log(this.emi);
    }
    else if(this.loanamt > 100000)
    {
      this.interest=this.loanamt * (0.12);
      console.log(this.interest);
      this.res=this.interest+this.loanamt;
      console.log(this.res);
      this.emi=this.res/this.loanten;
      this.emi=Math.round(this.emi);
      console.log(this.emi);
    }
  }
    
    
}
