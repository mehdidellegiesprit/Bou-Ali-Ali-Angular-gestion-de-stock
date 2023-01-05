import { Injectable } from '@angular/core';
import {AuthenticationRequest} from "../../models/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";
import {UtilisateurDto} from "../../models/utilisateur-dto";
import {ApiUtilisateurService} from "../../CallApiBackend/utilisateur/api.utilisateur.service";
import {ChangerMotDePasseUtilisateurDto} from "../../models/ChangerMotDePasseUtilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(
    private apiutilisateurService:ApiUtilisateurService
  ) { }


  findByEmail(email:string): Observable<UtilisateurDto> {
    return this.apiutilisateurService.getUserByEmail(email) ;
  }

  changerMotDePasse(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto) : Observable<ChangerMotDePasseUtilisateurDto>{
    return this.apiutilisateurService.changerMotDePasse(changerMotDePasseDto) ;
  }
}
