import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeApiService {
  apiUrl="https://api.postalpincode.in/pincode/";
  geoUrl="https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=d699c47904ba497b9110b0dc4de6ed14";
  constructor(private http:HttpClient) { }
  
  public getCity(zipcode:number)
  {
    console.log(zipcode);
    return this.http.get<String>(`${this.apiUrl}/${zipcode}`).toPromise();
  }
  public getGeoLocation(latitude:number,longitude:number)
  {
     return this.http.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d699c47904ba497b9110b0dc4de6ed14`)
  }



}
