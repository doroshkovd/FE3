import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot'
})
export class DotPipe implements PipeTransform {

  transform(value: string, max: number = 10): string {
    if (value.length <= max) {
      return value;
    }
    return `${value.slice(0, max - 3)}...`;
  }

}
