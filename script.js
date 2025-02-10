const nameInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const imageInput = document.getElementById("image");

// Array to hold objects
const myLibrary = [];

// Constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

}

Book.prototype.info = function() {
  return `This book is called ${this.title} and it is written by ${author} and it has ${pages}`;
}

console.log(book1.info());
console.log(book2.info());

function addBookToLibrary() {
  // take params, create a book then store it in the array
}