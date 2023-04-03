import Book from './Book.js';
import myBookLib from '../index.js';

// const myBook = new Book();
const getBook = () => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  book = Book(myBookLib.bookList, title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
};
export default getBook;
