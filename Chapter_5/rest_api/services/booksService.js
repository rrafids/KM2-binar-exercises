const booksRepository = require("../repositories/booksRepository");

class BooksService {
  static async getAll() {
    // Manggil repo get all books
    const getBooks = await booksRepository.getAll();

    return getBooks;
  }

  static async create({ title, author, price }) {
    const createdBook = await booksRepository.create({
      title,
      author,
      price,
    });

    return createdBook;
  }
}

module.exports = BooksService;
