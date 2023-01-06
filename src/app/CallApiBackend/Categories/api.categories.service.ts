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
  save(categoryDto : CategoryDto):Observable<CategoryDto> {
    console.log("ApiCategoriesService save ");

    return this.http.post<any>(this.baseurl + '/gestiondestock/v1/categories/create',categoryDto);
  }

  findById(idCategory: number):Observable<CategoryDto> {
    console.log("ApiCategoriesService findById ");
    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/categories/findById/'+idCategory);
  }

  delete(idCategory: number):Observable<any> {
    console.log("ApiCategoriesService delete ");
    return this.http.delete<any>(this.baseurl + '/gestiondestock/v1/categories/delete/'+idCategory);
  }
}
