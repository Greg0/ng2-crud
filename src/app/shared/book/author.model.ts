export class Author {
    fullName: string;
    constructor(firstName: string, lastName: string) {
        this.fullName = firstName + ' ' + lastName;
    }
}