const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function() {
    return `This book is called ${this.title} and it is written by ${author} and it has ${pages}`;
  }

}

const book1 = new Book('Harry Potter', 'J.K.Rowling', '1-400');
const book2 = new Book("Dragon ball Z", 'Akira Toriyama', "1kk")

console.log(book1.info());
console.log(book2.info());

function addBookToLibrary() {
  // take params, create a book then store it in the array
}