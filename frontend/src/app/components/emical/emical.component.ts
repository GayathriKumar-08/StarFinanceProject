import { Component, OnInit } from '@angular/core';
import { GoldloanapiService } from 'src/app/Service/goldloanapi.service';

@Component({
  selector: 'app-emical',
  templateUrl: './emical.component.html',
  styleUrls: ['./emical.component.css']
})
export class EmicalComponent implements OnInit {
  isvisible=false;
  ornamentsType:String="";
  caratType:String="";
  netWeight:number=0;
  totalCost:number=0;
  eloanamt:number=0;
 
  goldapi:any=0;
  result:number=0;


  constructor(private gservice:GoldloanapiService) { }
  ngOnInit(): void {
    this.gservice.getPrice().subscribe((data)=>
    {
      this.goldapi=data;
    });
  }
  calculateCost():number
  {
    this.result=this.goldapi.items[0].xauPrice/31.10;
    this.result=Math.round(this.result);
   
    this.isvisible=true;
    console.log(this.caratType+" "+this.ornamentsType+" ")
    if((this.ornamentsType=="Necklace" || this.ornamentsType=="Ring"|| this.ornamentsType=="Chain"||this.ornamentsType=="Gold Coin"||
     this.ornamentsType=="Solid Bangles"||this.ornamentsType=="Others")
    && this.caratType=="22")
    {
      this.totalCost=this.netWeight* Math.round(this.result);
      this.eloanamt=this.totalCost*0.60;
    }
    else if((this.ornamentsType=="Necklace" || this.ornamentsType=="Ring"|| this.ornamentsType=="Chain"||this.ornamentsType=="Gold Coin"||
    this.ornamentsType=="Solid Bangles"||this.ornamentsType=="Others") && this.caratType=="24")
    {
      this.totalCost=this.netWeight*Math.round(this.result);
      this.eloanamt=this.totalCost*0.60;
    }
    else{
      this.totalCost=0;
    }
    return this.totalCost;
  }
  
}
