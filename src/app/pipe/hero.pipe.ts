import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hero'
})
export class HeroPipe implements PipeTransform {

  transform(value: any[] | null, searchTerm: string = ""): any[] {

    if (value == null) {
      return [];
    }

    if (!Array.isArray(value) || !searchTerm) {
      return value;
  }

  searchTerm = searchTerm.toLowerCase();

  return value.filter((item) => {
    return item.name.toLocaleLowerCase().includes(searchTerm);
  });

    /*
    return value.filter((item) => {
      let isOK: boolean = false;
      for (let i in item) {
        let check = item[i].toString().toLowerCase();
        if (check.indexOf(searchTerm) > -1) {
          isOK = true;
        }
      }
      return isOK;
    });
    */
  }
}
