import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ApiCategoriesService} from "../../CallApiBackend/Categories/api.categories.service";
import {ApiArticleService} from "../../CallApiBackend/Article/api-article.service";
import {ArticleDto} from "../../models/article-dto";
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private userService: UserService,
    private apiArticleService : ApiArticleService ,
  ) { }
  enregistrerArticle(articleDto : ArticleDto):Observable<ArticleDto> {
    articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id ;
    return this.apiArticleService.save(articleDto) ;
  }
  findAllArticles () :Observable<ArticleDto[]> {
    return this.apiArticleService.findAll() ;
  }
  findArticleById (idArticle?:number) :Observable<ArticleDto> {
    if (idArticle){
      return this.apiArticleService.findArticleById(idArticle) ;
    }
    return of() ;
  }

  deleteArticle(idArticle: number) :Observable<any>{
    if (idArticle){
      return this.apiArticleService.deleteArticle(idArticle) ;
    }
    // return Observable vide
    return of() ;
  }
}
