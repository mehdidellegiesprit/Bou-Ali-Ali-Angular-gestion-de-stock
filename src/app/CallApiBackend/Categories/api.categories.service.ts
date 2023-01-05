import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryDto} from "../../models/category-dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {
  baseurl = 'http://localhost:8081';
  constructor(
    private http: HttpClient,
  ) { }
  findAll():Observable<CategoryDto[]> {
    console.log("ApiCategoriesService here ");

    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/categories/all');
  }
}
