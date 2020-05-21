import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepBase } from "../step-base";

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
})

export class Step1Component extends StepBase {
  @Input() data: any;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  onNext() {
    this.next.emit({nextStep: 2});
  }

}
