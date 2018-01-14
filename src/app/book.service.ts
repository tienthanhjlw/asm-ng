import { Injectable } from '@angular/core';
import { Book, bookList } from './books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { EventEmitter } from '@angular/core';
import { CounterServiceService } from './counter-service.service';
import { LogServiceService } from './log-service.service';

@Injectable()
export class BookService {
  onActive=new EventEmitter();
  activeBooks: Book[];
  inactiveBooks: Book[];
  constructor(private counterService:CounterServiceService, private logService:LogServiceService) { 
  }
  onSetToActive(id: number) {
    const foundBook: Book[] = bookList.filter(b => b.id === id);
    if (foundBook && foundBook.length > 0) {
      foundBook[0].active = true;
      this.counterService.addActive();
      this.logService.log(foundBook[0].name,' actived ',this.counterService.active,this.counterService.inactive)
    }
    this.initBooks();
  }
  onSetToInactive(id: number) {
    const foundBook: Book[] = bookList.filter(b => b.id === id);
    if (foundBook && foundBook.length > 0) {
      foundBook[0].active = false;
      this.counterService.addInactive();
      this.logService.log(foundBook[0].name,' inactived ',this.counterService.active,this.counterService.inactive)

    }
    this.initBooks();
  }


  initBooks() {
    this.activeBooks = bookList.filter(b => b.active);
    this.inactiveBooks = bookList.filter(b => !b.active);
  }
// getActiveBooks(): Observable<Book[]> {
//   this.initBooks();

//   return of (this.activeBooks);
// }
// getInactiveBooks(): Observable <Book[]>  {
//   this.initBooks();
 
//   return of (this.inactiveBooks);
// }
}
