import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[] | null, key: string,
    phrase: string | number | boolean,
    props?: { count: number } ): any[] | null {
    if (!Array.isArray(list) || !phrase || !key || key=="-- Select search category --") {
      return list;
    }

    const filtered = list.filter( item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      phrase = ('' + phrase).toLocaleLowerCase();
      return ('' + item[key]).toLocaleLowerCase().includes(phrase);
    });

    if (props?.count) {
      props.count = filtered.length;
    }
    return filtered;
    }
}
