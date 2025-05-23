var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.avaialable = true;
    }
    Book.prototype.borrow = function () {
        if (!this.avaialable) {
            this.avaialable = true;
            console.log("".concat(this.title, " is available"));
        }
        else {
            this.avaialable = false;
            console.log("".concat(this.title, " is not available"));
        }
    };
    return Book;
}());
var book = new Book("MAke hay", "Chimamanda", 1123);
book.borrow();
console.log(book);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(title, author, isbn, name, borrowedBook) {
        var _this = _super.call(this, title, author, isbn) || this;
        _this.name = name;
        _this.borrowedBook = [];
        return _this;
    }
    Member.prototype.borrowBook = function () {
        if (this.borrowedBook) {
            return ("".concat(this.name, " borrowed ").concat(this.borrowedBook));
        }
    };
    return Member;
}(Book));
