import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UtilisateurDto} from "../../models/utilisateur-dto";
import {HttpClient} from "@angular/common/http";
import {ChangerMotDePasseUtilisateurDto} from "../../models/ChangerMotDePasseUtilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurService {
  baseurl = 'http://localhost:8081';
  constructor(
    private http: HttpClient,
  ) { }

  getUserByEmail(email: string): Observable<UtilisateurDto>{
    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/utilisateurs/findByEmail/'+email);
  }
  changerMotDePasse(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto>{
    return this.http.post<any>(this.baseurl + '/gestiondestock/v1/utilisateurs/changerMotDePasse',changerMotDePasseDto);
  }
}
