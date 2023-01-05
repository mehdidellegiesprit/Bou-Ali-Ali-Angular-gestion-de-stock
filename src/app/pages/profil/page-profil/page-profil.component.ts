import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories/categories.service";

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit{

  constructor(
    private router:Router,
  ) {}

  ngOnInit(): void {
  }
  modifierMotDePasse() :void{
    this.router.navigate(['changermotdepasse']);
  }


}
