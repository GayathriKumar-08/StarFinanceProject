import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kycdocmodel } from '../Model/Kycdocmodel';

@Injectable({
  providedIn: 'root'
})
export class KycdocService {

   public dburl="http://localhost:8080/api/Kycdoc";
  constructor(private http:HttpClient) { }

  saveData(kyc:Kycdocmodel):Observable<Kycdocmodel>
  {
     return this.http.post<Kycdocmodel>(this.dburl, kyc);
     
  }
}
