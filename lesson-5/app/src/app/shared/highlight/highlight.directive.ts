import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight;
  defaultColor: string = 'green';

  // private _hostColor = 'green';

  @HostListener('mouseenter') onMouseEnter(event: MouseEvent): void {
    this._setStyle(this.appHighlight || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(event: MouseEvent): void {
    this._setStyle('transparent');
  }

  // @HostBinding('style.background') get hostColor() {
  //   return this._hostColor;
  // }

  constructor(public element: ElementRef, public renderer: Renderer2) {}

  ngOnInit(): void {
    // this.element.nativeElement as HTMLElement
    // console.log(this.element.nativeElement);

    // this.renderer.setStyle(this.element.nativeElement, 'background', 'red');

  }

  private _setStyle(color: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', color);
  }

}
