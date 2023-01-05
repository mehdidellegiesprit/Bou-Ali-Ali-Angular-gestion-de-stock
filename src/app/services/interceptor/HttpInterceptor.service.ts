import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authenticationResponse: AuthenticationResponse = {};
      if (localStorage.getItem("accessToken")) {
        authenticationResponse = JSON.parse(
          localStorage.getItem("accessToken") as string
        );
        console.log("------------------authenticationResponse------------------")
        console.log(authenticationResponse)
        console.log("------------------authenticationResponse------------------")
      const authReq = req.clone({
        headers: new HttpHeaders({
           Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });

        console.log("------------------authReq------------------")
        console.log(authReq)
        console.log("------------------authReq------------------")
        //TODO WE MUST pass this on parametres
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
