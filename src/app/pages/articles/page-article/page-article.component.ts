import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArticleDto} from "../../../models/article-dto";
import {ArticleService} from "../../../services/article/article.service";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit{
  listArticle: Array<ArticleDto> = [];
  errorMsg = "" ;

  constructor(
    private router:Router,
    private articleService : ArticleService
  ) {}
  ngOnInit(): void {
    this.findListArticle();
  }
  findListArticle() : void {
    this.articleService.findAllArticles()
      .subscribe(articles=>{
        console.log("articles")
        console.log(articles  )
        this.listArticle = articles
      },error=>{
        console.log("error")
        console.log(error)
      })
  }
  nouvelArticle() :void{
    this.router.navigate(['nouvelarticle']) ;
  }

  handleSuppression(event:any) :void{
    if (event === "success"){
      this.findListArticle();
    }else{
      this.errorMsg = event;
    }
  }
}
