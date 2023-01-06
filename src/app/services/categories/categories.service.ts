import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoryDto} from "../../models/category-dto";
import {Router} from "@angular/router";
import {ApiEntrepriseService} from "../../CallApiBackend/Entreprise/api.entreprise.service";
import {ApiCategoriesService} from "../../CallApiBackend/Categories/api.categories.service";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private router :Router,
    private apiCategoriesService : ApiCategoriesService ,
    private userService : UserService
  ) { }

  findAll():Observable<CategoryDto[]> {
    console.log("CategoriesService called ")
    return this.apiCategoriesService.findAll() ;
  }
  enregistrerCategory(categoryDto : CategoryDto):Observable<CategoryDto>{
    // ? checkNull si elle n'est pas null kamel l khedma bro
    categoryDto.idEntreprise=this.userService.getConnectedUser()?.entreprise?.id;
    return this.apiCategoriesService.save(categoryDto) ;
  }

  findById(idCategory:number) :Observable<CategoryDto>{
    return this.apiCategoriesService.findById(idCategory) ;
  }

  delete(idCategory?: number):Observable<any> {
    if (idCategory){
      return this.apiCategoriesService.delete(idCategory) ;
    }
    return of() ;
  }
}
