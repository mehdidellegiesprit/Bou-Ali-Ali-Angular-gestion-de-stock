import {Component, Input, OnInit} from '@angular/core';
import {ClientDto} from "../../models/client-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.css']
})
export class DetailCltFrsComponent implements OnInit{

  @Input() origin:string = '' ;
  @Input() clientfournisseurDto:any = {} ;
  constructor(
    private router : Router
  ) {}

  ngOnInit() :void {
  }
  modifierClientFournisseur() :void {
    if (this.origin === 'client'){
      this.router.navigate(['nouveauclient',this.clientfournisseurDto.id]) ;
    } else if (this.origin === 'fournisseur'){
      this.router.navigate(['nouveaufournisseur',this.clientfournisseurDto.id]) ;
    }
  }
}
