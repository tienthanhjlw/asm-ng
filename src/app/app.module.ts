import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveBooksComponent } from './active-books/active-books.component';
import { InactiveBooksComponent } from './inactive-books/inactive-books.component';
import { BookService } from './book.service';
import { CounterServiceService } from './counter-service.service';
import { LogServiceService } from './log-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveBooksComponent,
    InactiveBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService,CounterServiceService,LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
