import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';
import { User } from './users.service';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): Task[] {
    
    let searchText = args[0];

    return value.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()) || p.description.toLowerCase().includes(searchText.toLowerCase));
  }

}
@Pipe({
  name: 'search2',
  standalone: true
})
export class SearchPipe2 implements PipeTransform {

  transform(value: any[], ...args: string[]): User[] {
    
    let searchText = args[0];

    return value.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()) || p.address.toLowerCase().includes(searchText.toLowerCase));
  }

}

