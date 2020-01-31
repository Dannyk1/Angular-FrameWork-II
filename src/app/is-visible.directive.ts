import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input() showMe = true;
  constructor(private element: ElementRef, private renderer2: Renderer2) { }
  console.log(this.showMe);
}

}
