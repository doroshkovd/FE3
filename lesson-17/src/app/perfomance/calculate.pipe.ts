import { Pipe, PipeTransform } from "@angular/core";

function fibonacchi(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonacchi(num - 1) + fibonacchi(num - 2);
}

@Pipe({
  name: 'calculate',
})
export class CalculatePipe implements PipeTransform {

  transform(value: number): any {
    console.log('pipe');
    return fibonacchi(value);
  }
}
