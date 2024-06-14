//Incomplete

class Book{


    constructor(title, author,genre,pages){
        this.title = title;
        this.author=author;
        this.genre=genre;
        this.pages=pages;
    }

    displayInfo(){
        console.log(`Title:${this.title}, Author:${this.author}, Genre:${this.genre}, Pages:${this.pages}`);
    }
}

class LibraryBook extends Book{
    constructor(title, author, genre, pages, isAvailable){
        super(title,author,genre,pages);
        this.isAvailable=isAvailable;
    }
    displayInfo(){
        super.displayInfo();
        console.log(`Available:${this.isAvailable}`);
    }
}

class Library {
    constructor(name, location, book ){
        this.books=[];
        this.name=name;
        this.location=location;
        this.books.push(books);
    }
    addBook(){
        this.books.push(book);
    }
    removeBook(){}
}
