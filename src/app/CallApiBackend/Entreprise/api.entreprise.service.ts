import { Injectable } from '@angular/core';
import {AuthenticationRequest} from "../../models/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../models/authentication-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EntrepriseDto} from "../../models/entreprise-dto";

@Injectable({
  providedIn: 'root'
})
export class ApiEntrepriseService {
  baseurl = 'http://localhost:8081';
  constructor(
    private http: HttpClient,
  ) { }

  save(entrepriseDto : EntrepriseDto): Observable<EntrepriseDto> {
    return this.http.post<any>(this.baseurl + '/gestiondestock/v1/entreprises/create',entrepriseDto
    );
  }
}
