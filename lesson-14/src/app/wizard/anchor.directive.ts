import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[app-anchor]',
})

export class AnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
