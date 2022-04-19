const usersService = require("../services/usersService");

const getAll = async (req, res) => {
  // Manggil Service Get Books
  const getUsers = await usersService.getAll();

  res.send(getUsers);
};

const create = async (req, res) => {
  const { name, email } = req.body;

  const createdUser = await usersService.create({ name, email });

  res.status(201).send({
    message: "Berhasil membuat user baru",
    created_book: createdUser,
  });
};

module.exports = { getAll, create };
