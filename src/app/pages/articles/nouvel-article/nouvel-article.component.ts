import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleDto} from "../../../models/article-dto";
import {ArticleService} from "../../../services/article/article.service";
import {CategoryDto} from "../../../models/category-dto";
import {CategoriesService} from "../../../services/categories/categories.service";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css']
})
export class NouvelArticleComponent implements OnInit{
  errorMsg:Array<string> = [] ;
  articleDto:ArticleDto = {} ;
  categoryDto:CategoryDto={};
  listeCategorie:Array<CategoryDto> = [];
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private articleService :ArticleService,
    private categoriesService :CategoriesService

  ) {
  }

  ngOnInit(): void {
    this.categoryDto.id = -1 ;
    this.categoriesService.findAll()
      .subscribe(categories=>{
        this.listeCategorie=categories;
      });

    // pour l'update
    const idArticle = this.activatedRoute.snapshot.params['idArticle'] ;
    if (idArticle){
      this.articleService.findArticleById(idArticle)
        .subscribe(article=>{
          this.articleDto = article ;
          this.categoryDto = this.articleDto.category?this.articleDto.category : {} ;
        },error => {
          console.log(error) ;
        })
    }
  }

  cancel() :void{
    this.router.navigate(['articles'])
  }


  enregistrerArticle():void {
    this.articleDto.category = this.categoryDto ;
    this.articleService.enregistrerArticle(this.articleDto)
      .subscribe(art=>{
        this.router.navigate(['articles'])
      },error => {
        this.errorMsg = error.error.errors ;
      });
  }

  calculerTTC() :void{
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
      // prixHt + (prixHt * (tauxTVA / 100 ))
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100))) ;
    }
  }
}
