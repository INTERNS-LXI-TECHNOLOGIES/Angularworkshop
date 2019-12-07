import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[homeStructural]'
})
export class StructuralDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
   onMouseEnter() {
    this.structural('yellow');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.structural('null');
  }
  private structural(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
