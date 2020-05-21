import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepBase } from "../step-base";

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
})

export class Step2Component extends StepBase {
  @Input() data: any;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  onNext() {
    this.next.emit({nextStep: 3});
  }

}
