import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MaterializeDirective } from 'angular2-materialize';

import { Book, Author, Category } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  directives: [ROUTER_DIRECTIVES, MaterializeDirective]
})
export class BookComponent implements OnInit {

  books: Book[];

  detailTitle: string;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book(
        1,
        new Author('Deco', 'Moreno'),
        new Category('Kulinaria'),
        'Bestseller',
        'Najwyższa jakość'
      ),
      new Book(
        2,
        new Author('JK', 'Rowling'),
        new Category('Fantasy'),
        'Historia czarodzieja',
        'Harry Potter'
      ),
    ];
  }

}
