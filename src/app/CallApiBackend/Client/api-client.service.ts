import { Injectable } from '@angular/core';
import {CategoryDto} from "../../models/category-dto";
import {Observable} from "rxjs";
import {ClientDto} from "../../models/client-dto";
import {HttpClient} from "@angular/common/http";
import {ArticleDto} from "../../models/article-dto";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  baseurl = 'http://localhost:8081';
  constructor(
    private http: HttpClient,
  ) { }

  save(clientDto : ClientDto):Observable<ClientDto> {
    console.log("ApiClientService save ");
    return this.http.post<any>(this.baseurl + '/gestiondestock/v1/clients/create',clientDto);
  }
  findAll():Observable<ClientDto[]> {
    console.log("ApiClientService findAll ");
    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/clients/all');
  }
  findById(idClient: number):Observable<ClientDto> {
    console.log("ApiClientService findById ");
    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/clients/findById/'+idClient);
  }
  delete(idClient: number):Observable<any> {
    console.log("ApiClientService delete ");
    return this.http.delete<any>(this.baseurl + '/gestiondestock/v1/clients/delete/'+idClient);
  }


}
