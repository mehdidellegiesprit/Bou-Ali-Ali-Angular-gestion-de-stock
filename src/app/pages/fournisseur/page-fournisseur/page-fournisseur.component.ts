import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CltfrsService} from "../../../services/cltfrs/cltfrs.service";
import {ClientDto} from "../../../models/client-dto";
import {FournisseurDto} from "../../../models/fournisseur-dto";

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.css']
})
export class PageFournisseurComponent implements OnInit{

  listFournisseur: Array<FournisseurDto> = [];

  constructor(
    private router:Router,
    private cltFrsService : CltfrsService
  ) {}


  ngOnInit(): void {
    this.findAllFournisseurs();
  }
  findAllFournisseurs ():void{
    this.cltFrsService.findAllFournisseurs()
      .subscribe(fournisseur=>{
        this.listFournisseur = fournisseur;
      })
  }
  nouveauFournisseur() :void{
    this.router.navigate(['nouveaufournisseur']) ;
  }
}
