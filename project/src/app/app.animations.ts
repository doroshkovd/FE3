import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routeAnimations = trigger('routeAnimations', [
  transition('Cars <=> Parts', [
    style({
      position: 'relative',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ]),
    query(':enter', [
      style({left: '-100%'})
    ]),
    // query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(300, style({left: '100%'}))
      ]),
      query(':enter', [
        animate(300, style({left: '0%'}))
      ]),
    ]),
    // query(':enter', animateChild())

  ]),
]);
