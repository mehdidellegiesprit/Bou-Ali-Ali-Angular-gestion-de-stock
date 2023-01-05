import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
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
}
