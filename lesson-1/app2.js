import { AsyncSubject, BehaviorSubject, from, fromEvent, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { mergeMap, switchMap } from "rxjs/operators";
// 1
// const observable = new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.complete();
// });
// 2
// observable.subscribe((data) => {
//   console.log(data);
// });
// 3
//const timer = new Observable(observer => {
//   let counter = 0; //объявляем счетчик
//   setInterval(() => {
//     observer.next(counter++); // передаем значение счетчика наблюдателю и увеличиваем его на единицу
//   }, 1000);
// });
//
// timer.subscribe({
//   next: console.log //просто логируем каждое значение
// });
// 4
// const subscription = timer.subscribe({next: console.log});
// setTimeout(() => subscription.unsubscribe(), 5000);
// 5
// return () => {
//   clearInterval(intervalId);
// }
// 6
// const fromArray = from([1, 2, 3, 4, 5, 6]);
// fromArray.subscribe((data) => console.log(data));

// const ofArray = of([1, 2, 3, 4, 5, 6]);
// ofArray.subscribe((data) => console.log(data));

// 7
// of(1,2,3).pipe(
//   map(value => value * 2)
// ).subscribe({
//   next: console.log
// });
// 8
// of(1, 2, 3).pipe(
//   // пропускаем только нечетные значения
//   filter(value => value % 2 !== 0),
//   map(value = value * 2)
// ).subscribe({
//   next: console.log
// });
// 9 mergeMap
// const getData = (param) => {
//   return of(`retrieved new data with param ${param}`).pipe(
//     delay(1000)
//   )
// }
//
// from([1,2,3,4]).pipe(
//   mergeMap(param => getData(param))
// ).subscribe(val => console.log(val));

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(switchMap((ev) => interval(1000)));
// result.subscribe(x => console.log(x));

// const clicks = fromEvent(document, 'click');
// const positions = clicks.pipe(
//   tap(ev => console.log(ev)),
//   map(ev => ev.clientX),
// );
// positions.subscribe(x => console.log(x));

// const obs1 = of(1, 3, 5, 7);

// const subj = new Subject();
// const subj = new BehaviorSubject('Default value');
// const subj = new ReplaySubject(2);
const subj = new AsyncSubject();

// obs1.subscribe(x => console.log(`1sub ${x}`));
// obs1.subscribe(x => console.log(`2sub ${x}`));

subj.subscribe(x => console.log(`1st: ${x}`));
subj.next('11');
subj.next('111');
subj.next('1112');
subj.subscribe(x => console.log(`2st: ${x}`));
subj.next('22');
subj.complete();
