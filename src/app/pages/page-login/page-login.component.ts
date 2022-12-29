import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit{
  authenticationRequest = {
    login: String ,
    password: String
  } ;
  constructor(
    private userService :UserService
  ) {
    this.authenticationRequest.login="";
    this.authenticationRequest.password="";
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.authenticationRequest);
  }

}
