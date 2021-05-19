
import { Component, OnInit } from '@angular/core';
import { PincodeApiService } from '../../Services/pincode-api.service';

declare const L:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public latitude:number=0;
  public longitude:number=0;
  constructor(private apiServ:PincodeApiService){}
  ngOnInit(): void {
   
  }

  findMe()
 {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords=position.coords;
      console.log(position.coords.latitude,position.coords.longitude);
      let mymap = L.map('map').setView([coords.latitude,coords.longitude], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hhbm11Z2EtcHJpeWE5OCIsImEiOiJja25tb2RqZ3UwaXN5Mm5reDg2cnJtaG9nIn0.Z3zG8dQFfSSH8V63LcF62g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
     }).addTo(mymap);
   L.marker([coords.latitude,coords.longitude]).addTo(mymap);
    });
    
  }
}

}
    
       
  
      