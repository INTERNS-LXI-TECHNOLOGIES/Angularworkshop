import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
