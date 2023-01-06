import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryDto} from "../../../models/category-dto";
import {CategoriesService} from "../../../services/categories/categories.service";

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.css']
})
export class PageCategoriesComponent implements OnInit{
  listCategories : Array<CategoryDto> = [] ;
  selectedCatToDelete = -1 ;

  errorMsgs = '' ;
  constructor(
    private router:Router,
    private categoryService : CategoriesService
  ) {}

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories () : void {
    this.categoryService.findAll()
      .subscribe(res=>{
        this.listCategories = res ;
      })
  }



  nouvelleCategory() :void{
    this.router.navigate(['nouvellecategorie']);
  }


  modifierCategory(id:number) :void{
    //this.router.navigate(['nouvellecategorie/'+id]);
    this.router.navigate(['nouvellecategorie',id]);

  }

  confirmerEtSupprimerCat():void{
    if (this.selectedCatToDelete !== -1 ) {
      this.categoryService.delete(this.selectedCatToDelete)
        .subscribe(res=>{
          this.findAllCategories();
        },error => {
          console.log(error);
          this.errorMsgs = error.error.message ;
        });
    }
  }

  annulerSupprissionCat():void{
    this.selectedCatToDelete = -1 ;
  }

  selectCatPourSupprimer(id?: number) :void{
    this.selectedCatToDelete = id ;
  }
}
