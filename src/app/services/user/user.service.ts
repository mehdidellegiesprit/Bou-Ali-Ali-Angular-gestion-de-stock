import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Base url
  baseurl = 'http://localhost:8081';
  constructor(
    private router : Router,
    private http: HttpClient
  ) { }
// Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(auth:any): void {
    console.log("auth**********"+auth) ;
    this.http
      .post<any>(this.baseurl + '/gestiondestock/v1/auth/authenticate',auth,this.httpOptions)
      .subscribe(data => {
        console.log(data) ;
          localStorage.setItem("access_token",JSON.stringify(data))
      },error => {
          console.log(error) ;
      })
  }

}
