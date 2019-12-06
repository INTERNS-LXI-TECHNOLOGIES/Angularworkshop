import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  pure: false
})
export class MypipePipe implements PipeTransform {

  transform(value: any, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
