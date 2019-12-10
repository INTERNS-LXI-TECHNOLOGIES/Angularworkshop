import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: String, ...args: any[]): any {
    const c = value[0].toUpperCase();
    const newStr = '';
    const temp = value.slice(1, value.length);
    return c + temp;

  }

}
