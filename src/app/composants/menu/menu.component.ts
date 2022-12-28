import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public menuProperties: Array<Menu> = [
    {
    id:'1',
    titre:'Tableau de board',
    icon:'fa-solid fa-chart-line',
    url:'',
    sousMenu:[
      {
        id:'11',
        titre:'vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url:'',
      },
      {
        id:'12',
        titre:'Statistiques',
        icon:'fa-solid fa-chart-bar',
        url:'statistiques',
      }
    ]
  },
    {
      id:'2',
      titre:'Articles',
      icon:'fa-solid fa-boxes-stacked',
      url:'',
      sousMenu : [
        {
          id:'21',
          titre:'Articles',
          icon:'fa-solid fa-boxes-stacked',
          url:'articles',
        },
        {
          id:'22',
          titre:'Mouvements du stock',
          icon:'fa-solid fa-cubes-stacked',
          url:'mvtstk',
        }
      ]
    },
    {
      id:'3',
      titre:'Clients',
      icon:'fa-solid fa-user',
      url:'',
      sousMenu : [
        {
          id:'31',
          titre:'Clients',
          icon:'fa-solid fa-user',
          url:'clients',
        },
        {
          id:'32',
          titre:'Commandes clients ',
          icon:'fa-solid fa-user-secret',
          url:'commandesclient',
        }
      ]
    },
    {
      id:'4',
      titre:'Fournisseurs',
      icon:'fa-solid fa-user-tag',
      url:'',
      sousMenu : [
        {
          id:'41',
          titre:'Fournisseurs',
          icon:'fa-solid fa-user-tag',
          url:'fournisseurs',
        },
        {
          id:'42',
          titre:'Commandes fournisseurs',
          icon:'fa-solid fa-user-tag',
          url:'commandesfournisseur',
        }
      ]
    },
    {
      id:'5',
      titre:'Parametrages',
      icon:'fa-solid fa-gear',
      url:'',
      sousMenu : [
        {
          id:'51',
          titre:'Categories',
          icon:'fa-solid fa-gear',
          url:'categories',
        },
        {
          id:'52',
          titre:'Utilisateurs',
          icon:'fa-solid fa-users',
          url:'utilisateurs',
        }
      ]
    }
  ];

  private lastSelectedMenu : Menu | undefined ;
  constructor(
      private router:Router
  ) {}
  ngOnInit(): void {
  }

  navigate(menu:Menu) :void{
    // if this.lastSelectedMenu not null ==> defined
    if (this.lastSelectedMenu){
      this.lastSelectedMenu.active=false ;
    }
    menu.active=true ;
    this.lastSelectedMenu=menu ;
    this.router.navigate([menu.url])
  }
}
