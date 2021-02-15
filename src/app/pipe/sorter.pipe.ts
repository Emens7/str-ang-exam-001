import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    if (value == [] || key == '') {
      return value;
    }

  return value.sort((a, b) => {

    if(typeof a[key] === 'number' && typeof b[key] === 'number') {
      return b[key] - a[key];
    }else {
      const string1 = (a[key] as string).toLocaleLowerCase();
      const string2 = (b[key] as string).toLocaleLowerCase();
      return string1.localeCompare(string2);
    }

  })
  }

}
