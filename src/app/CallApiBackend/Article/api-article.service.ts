import { Injectable } from '@angular/core';
import {CategoryDto} from "../../models/category-dto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ArticleDto} from "../../models/article-dto";

@Injectable({
  providedIn: 'root'
})
export class ApiArticleService {
  baseurl = 'http://localhost:8081';
  constructor(
    private http: HttpClient,
  ) { }

  save(articleDto : ArticleDto):Observable<ArticleDto> {
    console.log("ApiArticleService save ");

    return this.http.post<any>(this.baseurl + '/gestiondestock/v1/articles/create',articleDto);
  }
  findAll():Observable<ArticleDto[]> {
    console.log("ApiArticleService findAll ");
    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/articles/all');
  }

  findArticleById(idArticle:number):Observable<ArticleDto> {
    console.log("ApiArticleService findAll ");
    return this.http.get<any>(this.baseurl + '/gestiondestock/v1/articles/findById/'+idArticle);
  }
  deleteArticle(idArticle:number):Observable<any> {
    console.log("ApiArticleService deleteArticleBy ");
    return this.http.delete<any>(this.baseurl + '/gestiondestock/v1/articles/delete/'+idArticle);
  }
}
