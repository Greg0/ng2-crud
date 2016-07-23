import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MaterializeDirective } from 'angular2-materialize';

import { Book, Author, Category } from '../shared';
import { BookService } from '../shared';
import { BookDetailComponent } from './book-detail';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MaterializeDirective,
    BookDetailComponent
  ],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  books: Book[];

  @ViewChild(BookDetailComponent)
  private bookDetail: BookDetailComponent;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.initBooks();
  }

  initBooks() {
    this.bookService.getBooks()
      .then((books: Book[]) => this.books = books);
  }

  showDetails(event: any) {
    let anchor = event.target.parentNode;
    let bookId = anchor.dataset.bookId;
    this.bookService.getBook(bookId)
      .then((book: Book) => this.bookDetail.showDetails(book));
  }

}
