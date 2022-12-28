import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrls: ['./nouvelle-category.component.css']
})
export class NouvelleCategoryComponent implements OnInit{

  constructor(
    private router:Router
  ) {}

  ngOnInit(): void {
  }

  cancel() :void{
    this.router.navigate(['categories'])
  }


}
