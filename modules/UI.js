import Book from './Book.js';
import bookLib from './BookLib.js';

const UI = (books) => {
  const bookLi = document.querySelector('#book-list');
  const book = document.createElement('LI');
  book.setAttribute('style', 'id:list');
  book.id = `${books.id}`;
  book.innerHTML = `<h3> "${books.title}" by ${books.author} </h3>`;

  book.style.listStyle = 'none';
  const delBook = document.createElement('button');
  delBook.innerHTML = 'Delete';
  delBook.addEventListener('click', () => {
    myBookLib.removeBook(books);
    bookLi.removeChild(book);
  });
  book.appendChild(delBook);
  bookLi.appendChild(book);
};
export default UI;