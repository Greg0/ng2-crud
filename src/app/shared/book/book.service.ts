import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book, Author, Category } from './';


let booksMock: Book[] = [
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
]

@Injectable()
export class BookService {

  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

  getBooks(): Promise<Book[]> {
    return Promise.resolve(booksMock);
  }

  getBook(bookId: number): Promise<Book> {
    return this.getBooks()
      .then((books: Book[]) => {
        let book = books.find(
          (element: Book) => element.id == bookId
        );
        return Promise.resolve(book);
      });
  }
}
