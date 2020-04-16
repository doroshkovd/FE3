import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  private _isShow = false;
  menu: HTMLElement;

  @HostListener('click', ['$event']) changeIsActive(event): void {
    console.log(event);
    this._isShow ? this._hideMenu() : this._showMenu();
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.menu = this.renderer.nextSibling(this.element.nativeElement);
  }

  private _hideMenu(): void {
    this.menu.classList.remove('show');
    this._isShow = false;
  }

  private _showMenu(): void {
    this.menu.classList.add('show');
    this._isShow = true;
  }

}
