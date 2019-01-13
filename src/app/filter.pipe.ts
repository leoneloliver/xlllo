import { Pipe, PipeTransform } from '@angular/core';

// declare function again script.js
declare var myAct: any;

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
      // call function again script.js
      myAct();
      //return it.name.first .toLocaleLowerCase().includes(searchText) || it.name.last .toLocaleLowerCase().includes(searchText);
      return it.name.first.toLocaleLowerCase().includes(searchText) || it.name.last.toLocaleLowerCase().includes(searchText);
      //return it.company.toLocaleLowerCase().includes(searchText) ;
    });
  }
}