const generator = require("../utils/generator");

const booksData = [
  {
    id: 987637,
    title: "Buku 1",
    author: "Penulis 1",
    price: 1000,
  },
  { id: 357238, title: "Buku 2", author: "Penulis 3", price: 9000 },
  {
    id: 157382,
    title: "Buku 3",
    author: "Penulis 3",
    price: 4000,
  },
];

class BooksRepository {
  static async getAll() {
    return booksData;
  }

  static async create({ title, author, price }) {
    const generatedID = await generator.generateID();

    booksData.push({ id: generatedID, title, author, price });

    return { id: generatedID, title, author, price };
  }
}

module.exports = BooksRepository;
