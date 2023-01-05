import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationRequest} from "../../models/authentication-request";
import {Router} from "@angular/router";
import {catchError, Observable, retry, throwError} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";
import {error} from "ng-packagr/lib/utils/log";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseurl = 'http://localhost:8081';

  constructor(
    private http: HttpClient,
  ) { }


  // @ts-ignore
  authenticate(authenticationRequest:AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<any>(this.baseurl + '/gestiondestock/v1/auth/authenticate',authenticationRequest
    );
  }


}
