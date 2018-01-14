import { Component } from '@angular/core';

import { Book, bookList } from './books';
import { BookService } from './book.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeBooks: Book[];
  inactiveBooks: Book[];
  ngOnInit(): void {
    this.service.inactiveBooks = this.inactiveBooks;
    this.service.activeBooks = this.activeBooks;
  }

  constructor(public service: BookService) {
    service.initBooks();
  }

}
