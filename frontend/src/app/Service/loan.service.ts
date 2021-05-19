import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanForm } from '../Model/loan-form';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loanUrl:string="http://localhost:8080/api/goldloanform";
  url="http://localhost:8080/api/fetchloandata";
  dbUrl="http://localhost:8080/api/fetchByLoanType"
  constructor(private http:HttpClient) { }
  sendData(loanData:LoanForm)
  {
    return this.http.post(this.loanUrl,loanData);
  }
  fetchDataByLoanNumber(loanId:number)
  {
    return this.http.get(`${this.loanUrl}/${loanId}`);
  }
  updateLoanData(loanNum:number,loan:LoanForm):Observable<any>
  {
    console.log(`${this.loanUrl}/${loanNum}`);

    return this.http.put<LoanForm>(`${this.loanUrl}/${loanNum}`,loan);
  }
  deleteByLoanNum(loanNumber:number)
  {
    console.log(`${this.loanUrl}/${loanNumber}`)
    return this.http.delete(`${this.loanUrl}/${loanNumber}`);
  }
  fetchAllLoan()
  {
    return this.http.get(this.loanUrl);
  }
  fetchLoanDataByIncome()
  {
    return this.http.get(this.url);
  }
  fetchByLoanType(loanType:String)
  {
    console.log(`${this.dbUrl}/${loanType}`)
    return this.http.get(`${this.dbUrl}/${loanType}`);
   
  }
}
