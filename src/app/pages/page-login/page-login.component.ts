import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {AuthenticationRequest} from "../../models/authentication-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit{
  authenticationRequest : AuthenticationRequest = {}
  errorMessage = '' ;

  constructor(
    private userService :UserService,
    private router :Router
  ) {
    this.authenticationRequest.login="";
    this.authenticationRequest.password="";
  }

  ngOnInit(): void {
  }

  login():void{
    this.userService.login(this.authenticationRequest).subscribe(data => {
      this.userService.setAccessToken(data) ;
      this.getUserByEmail();
      this.router.navigate(['']) ;
    },error => {
      // this.errorMessage = error.error.message ;
      this.errorMessage = "login / mot de passe incorrecte " ;
    })
  }
  getUserByEmail():void{
    this.userService.getUserByEmail(this.authenticationRequest.login)
      .subscribe(user =>{
        this.userService.setConnectedUser(user);
      });
  }


}
