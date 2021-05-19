import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldloanapiService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://data-asg.goldprice.org/dbXRates/INR";

  public getPrice(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
    
}
