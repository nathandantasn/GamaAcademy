// classes em javascript

class Book {
    
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book('Um Exu em Nova York', 'Cidinha da Silva', 100);

console.log(otherBook.read(), book.read());

class ITBook extends Book {

    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology;
    }


}

let itBook = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos');
console.log(itBook.read());
