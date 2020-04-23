import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, id: number): string {
    console.log(id);
    if(value.length <=  1) {
      return value;
    }
    return value.split('').reverse().join('');
  }

}
