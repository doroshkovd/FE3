import { AsyncSubject, BehaviorSubject, from, fromEvent, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  switchMap,
  take, tap,
  timeout
} from "rxjs/operators";

// const obs = new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.error('Error message');
//   observer.complete();
// });


// obs.subscribe(
//   (data) => console.log(data),
//   (err) => console.log(err),
//   () => console.log('done')
// );
//
// obs.subscribe(
//   (data) => console.log(data),
//   (err) => console.log(err),
//   () => console.log('done')
// );

// const obs2 = new Observable(observer => {
//   let x = 0;
//   const intervalId = setInterval(() => {
//     console.log('interval:', x);
//     observer.next(x++);
//
//   }, 1000);
//
//   return () => clearInterval(intervalId);
// });
//
// const subscription = obs2.subscribe((data) => console.log(data));
//
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// const obs3 = new Observable(observer => {
// //   observer.next(1);
// //   observer.next(2);
// //   observer.complete();
// // });
// //
// // obs3.subscribe((data) => console.log(data));

// const ofObs = of('a', 'b', 'c', {a: 1, b: 2}, 34);
//
// ofObs.subscribe((data) => console.log(data));
//
// const ofObs = from(['a', 'b', 'c', {a: 1, b: 2}, 34]);
//
// ofObs.subscribe((data) => console.log(data));

// interval(3000).subscribe((data) => console.log(data));
//
// const btn = document.getElementById('btn');
//
// const subscription = fromEvent(btn, 'click')
//   .subscribe((event) => {
//     console.log(event);
//   });
//
//
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// of(1, 3, 5).pipe(
//   map((data) => {
//     return data * 2;
//   })
// ).subscribe((nums) => console.log(nums));

// const inp = document.getElementById('text');
// fromEvent(inp, 'input')
//   .pipe(
//     debounceTime(200),
//
//   )
//   .subscribe((event) => {
//     console.log(inp.value);
//   });
//
// of(1, 1, 1, 2, 2, 1, 1)
//   .pipe(
//     distinctUntilChanged(),
//     filter((x) => {
//       return x % 2 === 1;
//     }),
//     map((x) => {
//       return `Value is: ${x}`
//     }),
//     take(1)
//   ).subscribe((num) => {
//   console.log(num);
// });

const getData = (param) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
};
// bad
// from([1,2,3,4]).subscribe((val) => {
//   getData(val).subscribe((data) => {
//     console.log(data);
//   });
// });

// good
// from([1,2,3,4]).pipe(
//   mergeMap(param => getData(param))
// ).subscribe(val => console.log(val+ '!'));

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   switchMap((ev) => interval(1000))
// );
//
// result.subscribe(x => console.log(x));

// const clicks = fromEvent(document, 'click');
// const positions = clicks.pipe(
//   tap(ev => console.log(ev)),
//   map(ev => ev.clientX),
// );
// positions.subscribe(x => console.log(x));

// const subj = new Subject();
// const subj = new Observable((observer) => {
//   observer.next(1)
//   observer.next(2)
//   observer.next(3)
// });

// const subj = new BehaviorSubject('Default value');
// const subj = new ReplaySubject();
const subj = new AsyncSubject();

// obs1.subscribe(x => console.log(`1sub ${x}`));
// obs1.subscribe(x => console.log(`2sub ${x}`));

subj.subscribe(x => console.log(`1st: ${x}`));
subj.next('11');
subj.next('111');
subj.next('1112');
subj.subscribe(x => console.log(`2st: ${x}`));
subj.next('22');
subj.next('22');
subj.next('22');
subj.next('22');
subj.subscribe(
  x => console.log(`3st: ${x}`),
  (err) => err,
  () => console.log('3 complete') );
subj.complete();
