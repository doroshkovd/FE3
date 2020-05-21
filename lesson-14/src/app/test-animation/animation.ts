import { animate, style, transition, trigger } from "@angular/animations";

export const errorTrigger = trigger('errorTrigger', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate(500, style({
        opacity: 1
      }))
    ]),
  transition(':leave', animate(500, style({opacity: 0})))
]);

export const widthTrigger = trigger('widthTrigger', [
  transition('* => *', [
    animate(500, style({
      width: '20px',
    })),
    animate(500, style({
      width: '*',
    }))
  ]),
]);
