const usersRepository = require("../repositories/usersRepository");

class UsersService {
  static async getAll() {
    // Manggil repo get all books
    const getUsers = await usersRepository.getAll();

    return getUsers;
  }

  static async create({ name, email }) {
    const createdUser = await usersRepository.create({
      name,
      email,
    });

    return createdUser;
  }
}

module.exports = UsersService;
