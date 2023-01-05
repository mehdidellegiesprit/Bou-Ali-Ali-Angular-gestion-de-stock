import { Injectable } from '@angular/core';
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationService} from "../../CallApiBackend/Authentication/authentication.service";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {UtilisateurDto} from "../../models/utilisateur-dto";
import {ChangerMotDePasseUtilisateurDto} from "../../models/ChangerMotDePasseUtilisateur-dto";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
      private authenticationService : AuthenticationService,
      private utilisateurService : UtilisateurService,
      private router :Router
  ) { }

  login(authenticationRequest:AuthenticationRequest): Observable<AuthenticationResponse> {
      return this.authenticationService.authenticate(authenticationRequest) ;
  }


  getUserByEmail(email?:string):Observable<UtilisateurDto>{
    if (email!==undefined){
      return this.utilisateurService.findByEmail(email);
    }
    // return of() un objet vide pour les observables
    return of() ;
  }


  setAccessToken (authenticationResponse : AuthenticationResponse) : void {
    localStorage.setItem("accessToken",JSON.stringify(authenticationResponse)) ;
  }

  setConnectedUser (utilisateur : UtilisateurDto) : void {
    localStorage.setItem("connectedUser",JSON.stringify(utilisateur)) ;
  }

  getConnectedUser () : UtilisateurDto {
    if (localStorage.getItem("connectedUser")){
      return JSON.parse(localStorage.getItem("connectedUser") as string) ;
    }
    return {} ;
  }

  changerMotDePasse(changerMotDePasseDto : ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto>{
     return this.utilisateurService.changerMotDePasse(changerMotDePasseDto)
  }

  //TODO
  isUserLoggedAndAccessTokenValid():boolean{
    if (localStorage.getItem("accessToken")){
      // TODO il faut verifier le access token est valide
      return true;
    }
    this.router.navigate(['login']) ;
    return false ;
  }




}
