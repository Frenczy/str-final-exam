import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(list: any[] | null, key: string, position?:number): any | null  [] {

    if (!Array.isArray(list) || !key) {
      return list;
    }

    else if (position==1) {return list.sort((a, b) =>
    (typeof a[key] === 'number' && typeof b[key] === 'number') ? a[key] - b[key] :
      ('' + a[key]).toLowerCase().localeCompare(('' + b[key]).toLowerCase()))}
    else if (position==-1) {return list.sort((a, b) =>
      (typeof a[key] === 'number' && typeof b[key] === 'number') ? b[key] - a[key] :
        ('' + b[key]).toLowerCase().localeCompare(('' + a[key]).toLowerCase()))}
  }
}
