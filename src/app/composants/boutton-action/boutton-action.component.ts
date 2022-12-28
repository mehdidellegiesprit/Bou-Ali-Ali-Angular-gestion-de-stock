import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.css']
})
export class BouttonActionComponent implements OnInit{

  @Input()
  isNouveauVisible = true ;

  @Input()
  isExporterVisible = true ;

  @Input()
  isImporterVisible = true ;

  @Output()  clickEvent  = new EventEmitter() ;

  constructor() {
  }
  ngOnInit(): void {
  }

  bouttonNouveauClick():void{
    console.log("***boutton action*** bouttonNouveauClick CLICKED")
    this.clickEvent.emit();
  }


}
