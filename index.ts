class Book{
    title:string;
    author:string;
    isbn:number;
    avaialable:boolean;

    constructor(title:string, author:string, isbn:number){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.avaialable = true;
    }

    borrow():boolean{
        if(this.avaialable){
            this.avaialable = true;
            console.log(`${this.title} has been borrowed.`);
            return true;
        }else{
            this.avaialable = false;
            console.log(`${this.title} has not been borrowed.`);
            return false;
        }
    }

    returnBook():void{
       if(this.avaialable){
        console.log(`${this.title} has been returned`)
       }
    }

}

const book = new Book("Make hay", "Chimamanda", 1123)
const book2 = new Book("Ade the Drummer Boy", "Beu", 1149);
book.borrow();
console.log(book)
console.log(book2)

class Member {
    name: string;
    borrowedBook : Book[];
    
    constructor(name:string){
        this.name = name;
        this.borrowedBook = [];
    }

    borrowBook(book:Book): void{
        if(book.avaialable){
            book.borrow()
            this.borrowedBook.push(book)
            console.log(`${this.name} borrowed ${this.borrowedBook}`)
        }else{
            console.log(`${book.title} is not available`)
        }
    }

    listBorrowedBooks():void{

       this.borrowedBook.forEach(
        book => {
           console.log(`These are the borrowed books : ${book.title} by ${this.name}`)
        }
       )
    }
}
const member1 = new Member("Ope");
member1.borrowBook(book);
member1.borrowBook(book);

member1.listBorrowedBooks()

class Library{
    books : Book[];
    members: Member[];

    constructor(){
        this.books = [];
        this.members = [];
    }
    
    addBooks(book:Book){
      this.books.push(book)
    }

    registerMembers(member:Member){
      this.members.push(member)
    }

    listAvailableBooks(): void{
        this.books
        .filter(book => book.avaialable)
        .forEach(availableBooks => 
            console.log(`These are the available books ${availableBooks}`)
        )  
    }
}
const library1 = new Library()
console.log(library1)
library1.addBooks(book2)
library1.registerMembers(member1);
library1.listAvailableBooks()
