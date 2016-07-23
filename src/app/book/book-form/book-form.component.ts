import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { NgForm }	           from '@angular/forms';

import { MaterializeDirective } from 'angular2-materialize';
import { Book, BookService }    from '../../shared/';

@Component({
  moduleId: module.id,
  selector: 'book-form',
  templateUrl: 'book-form.component.html',
  styleUrls: ['book-form.component.css'],
  directives: [ROUTER_DIRECTIVES, MaterializeDirective],
  providers: [BookService]
})
export class BookFormComponent implements OnInit {

  private book: Book;
  private selectOptions = [];
  private sub: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) { }

  public ngOnInit() {
    this.loadBook();
  }

  private loadBook() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      console.log(id);
      this.bookService.getBook(id)
        .then((book: Book) => console.log(book));
    });
  }
}