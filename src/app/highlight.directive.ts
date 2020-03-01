import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') hightLight() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave ') cancelHightlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
