import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  public apiUrl:string="http://localhost:8080/api/otp";

  constructor(private http:HttpClient) { }
  public getOtp(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
