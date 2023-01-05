import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {UtilisateurDto} from "../../models/utilisateur-dto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  connectedUser: UtilisateurDto = {} ;
  constructor(
      private userService : UserService
  ) {}

  ngOnInit() {
    this.connectedUser = this.userService.getConnectedUser();
    console.log(this.connectedUser.nom)
    console.log(this.connectedUser.prenom)
  }


}
