import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'barcode',
})
export class BarcodePipe implements PipeTransform {

  // tslint:disable-next-line: ban-types
  transform(value: String, ...args: any[]): String {
    if (!value) {
    return '';
    }
    return '****-****_' + (value.length > 8 ? (value.length - 8) : '');
  }

}
