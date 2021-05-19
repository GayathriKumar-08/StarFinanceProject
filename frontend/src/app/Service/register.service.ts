import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../Model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public dbUrl:string="http://localhost:8080/api/register";
  constructor(private http:HttpClient) { }
  saveData(reg:Register):Observable<Register>
  {
     return this.http.post<Register>(this.dbUrl, reg);
     
  }
  
}
