const booksService = require("../services/booksService");

const getAll = async (req, res) => {
  // Manggil Service Get Books
  const getBooks = await booksService.getAll();

  res.send(getBooks);
};

const create = async (req, res) => {
  const { title, author, price } = req.body;

  const createdBook = await booksService.create({ title, author, price });

  res.status(201).send(createdBook);
};

module.exports = { getAll, create };
