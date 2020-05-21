import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepBase } from "../step-base";

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
})

export class Step3Component extends StepBase {
  @Input() data: any;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  onNext() {
    this.next.emit({nextStep: 0});
  }

}
