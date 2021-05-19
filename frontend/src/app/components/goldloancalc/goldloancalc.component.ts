import { Component, OnInit } from '@angular/core';
import { Goldloancalc } from 'src/app/Model/Goldloancalc';
import { GoldloanapiService } from 'src/app/Service/goldloanapi.service';
import { GoldloancalcService } from 'src/app/Service/goldloancalc.service';

@Component({
  selector: 'app-goldloancalc',
  templateUrl: './goldloancalc.component.html',
  styleUrls: ['./goldloancalc.component.css']
})
export class GoldloancalcComponent implements OnInit {
  glc: Goldloancalc;

  isvisible = false;


  ornamentsType: string = "";
  caratType: string = "";
  netWeight: number = 0;
  totalCost: number = 0;
  eloanamt: number = 0;
  goldapi: any = 0;
  result: number = 0;

  constructor(private gservice: GoldloanapiService, private gold: GoldloancalcService) { }
  ngOnInit(): void {
    this.gservice.getPrice().subscribe((data) => {
      this.goldapi = data;
    });

  }


  calculateCost(): number {

    this.result = this.goldapi.items[0].xauPrice / 31.10;
    this.result = Math.round(this.result);

    this.isvisible = true;
    console.log(this.caratType + " " + this.ornamentsType + " ")
    if ((this.ornamentsType == "Necklace" || this.ornamentsType == "Ring" || this.ornamentsType == "Chain" || this.ornamentsType == "Gold Coin" ||
      this.ornamentsType == "Solid Bangles" || this.ornamentsType == "Others")
      && this.caratType == "22") {
      this.totalCost = this.netWeight * Math.round(this.result);
      this.eloanamt = this.totalCost * 0.60;
    }
    else if ((this.ornamentsType == "Necklace" || this.ornamentsType == "Ring" || this.ornamentsType == "Chain" || this.ornamentsType == "Gold Coin" ||
      this.ornamentsType == "Solid Bangles" || this.ornamentsType == "Others") && this.caratType == "24") {
      this.totalCost = this.netWeight * Math.round(this.result);
      this.eloanamt = this.totalCost * 0.60;
    }
    else {
      this.totalCost = 0;
    }
   

    this.glc = new Goldloancalc(this.ornamentsType, this.netWeight, this.result, this.caratType, this.totalCost, this.eloanamt);
    console.log(this.glc);
    this.gold.saveData(this.glc).subscribe(data => {
      data = this.glc;
      console.log(data);
    });
    return this.totalCost;
  }

 
}
