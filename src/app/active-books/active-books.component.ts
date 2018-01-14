import { Component, EventEmitter, Input, Output } from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-active-books',
  templateUrl: './active-books.component.html',
  styleUrls: ['./active-books.component.css']
})
export class ActiveBooksComponent {
books=this.service.activeBooks ;
  onSetToInactive(id: number) {
 this.service.onSetToInactive(id);
 this.service.onActive.emit(this.service.activeBooks);
}
  constructor(public service: BookService) {

  }
 
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.onActive.subscribe(() => this.books = this.service.activeBooks);
    
  }
}
