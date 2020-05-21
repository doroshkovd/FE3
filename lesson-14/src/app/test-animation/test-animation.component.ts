import { Component } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { errorTrigger, widthTrigger } from "./animation";

@Component({
  selector: 'app-animation',
  templateUrl: './test-animation.component.html',
  animations: [
    trigger('onDivClick', [
      state('start', style({
        backgroundColor: 'red',
        width: '150px',
        height: '150px',
      })),
      state('end', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('active', style({
        width: '140px',
        height: '140px',
        backgroundColor: 'red',
      })),
      transition('start <=> end', animate(1000)),
      transition('start => active', animate(400)),
      transition('active => end', animate(400)),
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        border: '3px solid grey',
      })),
      state('end', style({
        width: '155px',
        height: '155px',
        backgroundColor: '#b1b1ec',
        border: '3px solid grey',
      })),
      transition('start <=> end', [
        style({
          backgroundColor: 'red'
        }),
        animate(1000, style({
          backgroundColor: 'yellow'
        })),
        animate(1000)
      ]),
    ]),
    errorTrigger,
    widthTrigger
  ]
})

export class TestAnimationComponent {
  triggerState = 'start';

  multi = true;
  isError = false;

  onClick() {
    this.triggerState = 'end';
    setTimeout(() => {
      this.triggerState = 'start';
    }, 2000);
  }
}
