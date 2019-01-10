import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {

      //return it.name.first .toLocaleLowerCase().includes(searchText) || it.name.last .toLocaleLowerCase().includes(searchText);
      return it.name.first.toLocaleLowerCase().includes(searchText) || it.name.last.toLocaleLowerCase().includes(searchText);
      //return it.company.toLocaleLowerCase().includes(searchText) ;
    });
  }
}