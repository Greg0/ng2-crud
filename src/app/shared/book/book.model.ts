import {Author, Category} from './';

export class Book {
    constructor(
        public id: number,
        public author: Author,
        public category: Category,
        public description: string,
        public title: string
    ) { }
}