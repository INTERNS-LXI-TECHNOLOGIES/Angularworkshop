import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {
  constructor(private el: ElementRef) {}
}
