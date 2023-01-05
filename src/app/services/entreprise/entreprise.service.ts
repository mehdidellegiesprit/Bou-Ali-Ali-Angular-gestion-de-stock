import { Injectable } from '@angular/core';
import {EntrepriseDto} from "../../models/entreprise-dto";
import {Observable} from "rxjs";
import {ApiEntrepriseService} from "../../CallApiBackend/Entreprise/api.entreprise.service";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entrepriseService : ApiEntrepriseService
  ) { }

  sinscrire(entrepriseDto : EntrepriseDto) : Observable<EntrepriseDto>{
      return this.entrepriseService.save(entrepriseDto) ;
  }

}
