import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from '../Model/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  url:string="http://localhost:8080/api/banklogin";
  constructor(private http:HttpClient) { }
  public saveData(bank:Bank)
  {
    return this.http.post<Bank>(this.url,bank);
  }
}
