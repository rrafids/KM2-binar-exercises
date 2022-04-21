const usersService = require("../services/usersService");

const getAll = async (req, res) => {
  // Manggil Service Get Books
  const getUsers = await usersService.getAll();

  // Response API Microservices
  // res.send(getUsers);

  // Response Data Monolithic (EJS)
  return getUsers;
};

const getByUserId = async (req, res) => {
  const { id } = req.params;

  // Manggil Service Get Books
  const getPosts = await usersService.getByUserId({ id });

  res.send(getPosts);
};

const create = async (req, res) => {
  const { name, email, size } = req.body;

  console.log(size);

  const createdUser = await usersService.create({ name, email });

  // Untuk Response API
  // res.status(201).send({
  //   message: "Berhasil membuat user baru",
  //   created_book: createdUser,
  // });

  // Untuk Response URL
  res.redirect("/register");
};

module.exports = { getAll, create, getByUserId };
