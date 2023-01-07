import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientDto} from "../../models/client-dto";
import {AdresseDto} from "../../models/adresse-dto";
import {CltfrsService} from "../../services/cltfrs/cltfrs.service";
import {FournisseurDto} from "../../models/fournisseur-dto";

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.css']
})
export class NouveauCltFrsComponent implements OnInit{

  origin = '';
  clientFournisseur :any = {} ;
  adresseDto : AdresseDto = {} ;
  errorMsg: Array<string> = [];
  constructor(
    private router:Router,
    private activatedRoute : ActivatedRoute,
    private cltFrsService:CltfrsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
    this.findObject();

  }

  findObject () : void {
    const id = this.activatedRoute.snapshot.params['id'] ;
    if (this.origin==='client'){
      this.cltFrsService.findClientById(id)
        .subscribe(client=>{
          this.clientFournisseur = client ;
          this.adresseDto = this.clientFournisseur.adresse ;
        })
    } else if (this.origin==='fournisseur'){
      this.cltFrsService.findFournisseurById(id)
        .subscribe(fournisseur=>{
          this.clientFournisseur = fournisseur ;
          this.adresseDto = this.clientFournisseur.adresse ;
        })
    }
  }

  Enregistrer() :void {
    if (this.origin==='client'){
      this.cltFrsService.enregistrerClient(this.mapToClient())
        .subscribe(client=>{
          this.router.navigate(['clients']) ;
        },error => {
          this.errorMsg = error.error.errors;
        });
    }else if (this.origin==='fournisseur'){
      this.cltFrsService.enregistrerFournisseur(this.mapToFournisseur())
        .subscribe(fournisseurs=>{
          this.router.navigate(['fournisseurs']) ;
        },error => {
          this.errorMsg = error.error.errors;
        });
    }
  }
  cancelClick() :void{
    if (this.origin==='client'){
      this.router.navigate(['clients']);
    }else if (this.origin==='fournisseur'){
      this.router.navigate(['fournisseurs']);
    }
  }

  mapToClient() :ClientDto{
    const clientdto:ClientDto = this.clientFournisseur;
    clientdto.adresse = this.adresseDto ;
    return  clientdto;
  }
  mapToFournisseur() :FournisseurDto{
    const fournisseurDto:FournisseurDto =this.clientFournisseur;
    fournisseurDto.adresse = this.adresseDto ;
    return  fournisseurDto;
  }
}
