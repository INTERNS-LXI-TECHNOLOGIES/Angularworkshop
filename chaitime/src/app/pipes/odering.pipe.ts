import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odering'
})
export class OderingPipe implements PipeTransform {

  transform(value: any, num?: number): number {
    return Math.pow(value , num );
  }

}
