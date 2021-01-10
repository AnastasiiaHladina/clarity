import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busType'
})
export class BusTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 0: return 'IDE';
      case 1: return 'SATA';
      case 2: return 'SCSI';
      case 3: return 'USB';
    }
    return null;
  }

}
