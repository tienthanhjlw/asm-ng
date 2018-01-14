import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../book.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-inactive-books',
  templateUrl: './inactive-books.component.html',
  styleUrls: ['./inactive-books.component.css']
})
export class InactiveBooksComponent implements OnInit {
  books=this.service.inactiveBooks;

  onSetToActive(id: number) {
    this.service.initBooks();
    this.service.onSetToActive(id);
    this.service.onActive.emit(this.service.inactiveBooks);

  }
  constructor(public service: BookService) {

  }
  getInactiveBooks(){

  }
  ngOnInit() {
    this.service.onActive.subscribe(() => this.books = this.service.inactiveBooks);
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
