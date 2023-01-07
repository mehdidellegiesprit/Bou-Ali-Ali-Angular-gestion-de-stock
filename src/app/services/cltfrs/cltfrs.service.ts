import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ApiClientService} from "../../CallApiBackend/Client/api-client.service";
import {ApiFournisseuerService} from "../../CallApiBackend/Fournisseur/api-fournisseuer.service";
import {ClientDto} from "../../models/client-dto";
import {Observable, of} from "rxjs";
import {FournisseurDto} from "../../models/fournisseur-dto";

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  constructor(
    private userService :UserService,
    private clientService :ApiClientService,
    private fournisseurService:ApiFournisseuerService
  ) { }

  enregistrerClient (clientDto:ClientDto) : Observable<ClientDto>{
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.save(clientDto) ;
  }

  enregistrerFournisseur (fournisseurDto:FournisseurDto) : Observable<FournisseurDto>{
    fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.fournisseurService.save(fournisseurDto) ;
  }

  findAllClients():Observable<ClientDto[]> {
    return this.clientService.findAll() ;
  }
  findAllFournisseurs():Observable<FournisseurDto[]> {
    return this.fournisseurService.findAll() ;
  }

  findClientById(id:number):Observable<ClientDto>{
    if (id){
      return this.clientService.findById(id) ;
    }
    return of() ;
  }

  findFournisseurById(id:number):Observable<FournisseurDto>{
    if (id){
      return this.fournisseurService.findById(id) ;
    }
    return of() ;
  }
  deleteClient (idClient:number) :Observable<any> {
    if (idClient){
      return this.clientService.delete(idClient) ;
    }
    return of() ;
  }
  deleteFournisseur (idFournisseur:number) :Observable<any> {
    if (idFournisseur){
      return this.fournisseurService.delete(idFournisseur) ;
    }
    return of() ;
  }

}










