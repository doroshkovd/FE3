enum State {
  more,
  less
}

import {
  Directive, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIfResponsive]'
})
export class IfResponsiveDirective implements OnInit {

  @Input() appIfResponsive: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef,
    private renderer: Renderer2,
  ) { }

  prevState: number;

  ngOnInit(): void {
    this.prevState = this._initPrevState();

    this.renderer.listen(window, 'resize', this._repaint.bind(this));
    this._repaint();
  }

  _repaint() {
    if (window.innerWidth < this.appIfResponsive && this.prevState === State.more) {
      this.containerRef.clear();
      this.prevState = State.less;
      console.log(1);
    } else if (window.innerWidth >= this.appIfResponsive && this.prevState === State.less) {
      this.containerRef.clear();
      this.containerRef.createEmbeddedView(this.templateRef);
      this.prevState = State.more;
      console.log(2);
    }
  }

  private _initPrevState() {
    return window.innerWidth < this.appIfResponsive ? State.more : State.less;
  }
}
