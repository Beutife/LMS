var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.avaialable = true;
    }
    Book.prototype.borrow = function () {
        if (this.avaialable) {
            this.avaialable = false;
            console.log("".concat(this.title, " has been borrowed."));
            return true;
        }
        else {
            this.avaialable = false;
            console.log("".concat(this.title, " has not been borrowed."));
            return false;
        }
    };
    Book.prototype.returnBook = function () {
        if (this.avaialable) {
            console.log("".concat(this.title, " has been returned"));
        }
    };
    return Book;
}());
var book = new Book("Make hay", "Chimamanda", 1123);
var book2 = new Book("Ade the Drummer Boy", "Beu", 1149);
book.borrow();
console.log(book);
console.log(book2);
var Member = /** @class */ (function () {
    function Member(name) {
        this.name = name;
        this.borrowedBook = [];
    }
    Member.prototype.borrowBook = function (book) {
        if (book.avaialable) {
            book.borrow();
            this.borrowedBook.push(book);
            console.log("".concat(this.name, " borrowed ").concat(this.borrowedBook));
        }
        else {
            console.log("".concat(book.title, " is not available"));
        }
    };
    Member.prototype.listBorrowedBooks = function () {
        var _this = this;
        this.borrowedBook.forEach(function (book) {
            console.log("These are the borrowed books : ".concat(book.title, " by ").concat(_this.name));
        });
    };
    return Member;
}());
var member1 = new Member("Ope");
member1.borrowBook(book);
member1.borrowBook(book);
member1.listBorrowedBooks();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBooks = function (book) {
        this.books.push(book);
    };
    Library.prototype.registerMembers = function (member) {
        this.members.push(member);
    };
    Library.prototype.listAvailableBooks = function () {
        this.books
            .filter(function (book) { return book.avaialable; })
            .forEach(function (availableBooks) {
            return console.log("These are the available books ".concat(availableBooks));
        });
    };
    return Library;
}());
var library1 = new Library();
console.log(library1);
library1.addBooks(book2);
library1.registerMembers(member1);
library1.listAvailableBooks();
