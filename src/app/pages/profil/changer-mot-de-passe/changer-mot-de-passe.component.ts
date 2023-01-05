import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories/categories.service";
import {error} from "ng-packagr/lib/utils/log";
import {ChangerMotDePasseUtilisateurDto} from "../../../models/ChangerMotDePasseUtilisateur-dto";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.css']
})
export class ChangerMotDePasseComponent implements OnInit{
  changerMotDePasseDto : ChangerMotDePasseUtilisateurDto = {}
  ancienMotDePasse = '' ;
  constructor(
    private router:Router,
    private userService:UserService,
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('origin')&&localStorage.getItem('origin')==='inscription'){
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin') ;
    }
  }

  cancel() :void{
    this.router.navigate(['profil'])
  }


  changerMotDePasseUtilisateur() :void{
    this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
    console.log("changerMotDePasseUtilisateur action button") ;
    console.log(this.changerMotDePasseDto) ;
    this.userService.changerMotDePasse(this.changerMotDePasseDto)
      .subscribe(data =>{
        // rien faire
        this.router.navigate(['profil']) ;
      })
  }
}
