const nameInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const imageInput = document.getElementById("image");
const addBtn = document.getElementById("add-btn");

// Array to hold objects
const myLibrary = [];

// Constructor
function Book(title, author, image) {
  this.title = title;
  this.author = author;
  this.image = image;
}

Book.prototype.info = function() {
  return `${this.title} ${this.author} ${this.image} `;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array

  let nameValue = nameInput.value;
  let authorValue = authorInput.value;
  let imageValue = imageInput.value;

  if (nameValue === "" || authorValue === "" || imageValue === "") {
    alert("Please enter all the correct values")
  }

  let newBook = new Book (nameValue, authorValue, imageValue);
  myLibrary.push(newBook);
  displayBooks();

  nameInput.value = "";
  authorInput.value = "";
  imageInput.value = "";
}

function displayBooks() {
  const books = document.querySelector(".book-cards");
  books.innerHTML = "";
  
  myLibrary.forEach((book, index) => {

    let newDiv = document.createElement("div");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let myImage = document.createElement("img");
    myImage.classList.add("book-card__image");
    myImage.src = book.image;

    let myTitle = document.createElement("p");
    myTitle.textContent = book.title;
    myTitle.classList.add("book-card__title");

    let myAuthor = document.createElement("p");
    myAuthor.classList.add("book-card__author");
    myAuthor.textContent = book.author;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("book-card__delete-btn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks(); 
    });

    bookCard.appendChild(myImage);
    bookCard.appendChild(myTitle);

    bookCard.appendChild(newDiv);
    newDiv.appendChild(myAuthor);
    newDiv.appendChild(deleteBtn);

    books.appendChild(bookCard);
  });
}

addBtn.addEventListener("click", addBookToLibrary);