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
            this.avaialable = false;
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
book.borrow();
console.log(book)

class Member {
    name: string;
    borrowedBook : Book[];
    
    constructor(name:string, borrowedBook:[]){
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
//const memberBook = new Member('Ade the drummer boy','Beu', 1149)
