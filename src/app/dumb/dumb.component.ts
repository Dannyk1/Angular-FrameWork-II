import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `<p>{{dumbInput}}</p>`,
  encapsulation: ViewEncapsulation.Emulated

})
export class DumbComponent implements OnInit {

  @Input() dumbInput: any;

  constructor() { }

  ngOnInit() {
  }

}
