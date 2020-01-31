import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template:  ` <app-dumb *ngFor= "let smartelement of smartElements" [dumbInput]="smartelement.name + ' ' + smartelement.age"></app-dumb> `
})
export class SmartComponent implements OnInit {
// players: object[] = [];
smartElements: Array<any>;

  constructor() {
    this.smartElements = [{name:"Danny", age:30}, {name:"Simon", age:28}, {name:"Assad", age:37}]
  }


  ngOnInit() {
  }

}

