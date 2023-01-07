import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CltfrsService} from "../../../services/cltfrs/cltfrs.service";
import {ClientDto} from "../../../models/client-dto";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit{
  listClient: Array<ClientDto> = [];

  constructor(
    private router:Router,
    private cltFrsService : CltfrsService
  ) {}
  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients ():void{
    this.cltFrsService.findAllClients()
      .subscribe(clients=>{
        this.listClient = clients;
      })
  }
  nouveauClient() :void {
    this.router.navigate(['nouveauclient']) ;
  }
}
