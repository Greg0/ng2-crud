import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Book } from '../../shared/';

@Component({
  moduleId: module.id,
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailComponent{

    public book: Book;

    public isVisible: boolean;

    constructor() { }

    showDetails(book: Book) {
        this.book = book;
        this.isVisible = true;
    }
}