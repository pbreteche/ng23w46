import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight')
  color?: string;
  defaultColor = 'yellow';

  constructor(private elt: ElementRef) {
  }

  ngOnInit() {
    this.elt.nativeElement.style.backgroundColor = this.trueColor;
  }

  get trueColor() {
    return this.color || this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(true)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor()
  }

  private setColor(reverse = false) {
    const style = this.elt.nativeElement.style;
    if (reverse) {
      style.color = this.trueColor;
      style.backgroundColor = 'inherit';
    } else {
      style.color = 'inherit';
      style.backgroundColor = this.trueColor;
    }
  }
}
