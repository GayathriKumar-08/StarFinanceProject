import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:8080/api/notAllowed"

  navigate()
  {
    
      return this.http.get(this.url);
        
  }

}
