import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goldloancalc } from '../Model/Goldloancalc';

@Injectable({
  providedIn: 'root'
})
export class GoldloancalcService {

public dbUrl:string="http://localhost:8080/api/Goldloancalc";

  constructor(private http:HttpClient) { }

  saveData(gold:Goldloancalc):Observable<Goldloancalc>
  {
     return this.http.post<Goldloancalc>(this.dbUrl, gold);
     
  }
}