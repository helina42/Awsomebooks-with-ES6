import Book from './Book.js';
// update UI of the list books section
export default class bookLib {
  bookList = [];

  constructor(bookList) {
    this.bookList = bookList;
  }

  addBook(book) {
    if (book.title.trim() !== '' && book.author.trim() !== '') {
      this.bookList = this.bookList.concat(book);
      localStorage.setItem('bookLib', JSON.stringify(this.bookList));
      UI(book);
    }
  }

  removeBook(book) {
    this.bookList = this.bookList.filter((filt) => filt.id !== book.id);
    localStorage.setItem('bookLib', JSON.stringify(this.bookList));
  }
}
