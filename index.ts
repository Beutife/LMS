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

    borrow(){
        if(!this.avaialable){
            this.avaialable = true;
            console.log(`${this.title} is available`)
        }else{
            this.avaialable = false;
            console.log(`${this.title} is not available`)
        }
    }

}

