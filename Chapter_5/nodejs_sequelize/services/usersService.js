const usersRepository = require("../repositories/usersRepository");
const postsRepository = require("../repositories/postsRepository");

class UsersService {
  static async getAll({ name }) {
    const getUsers = await usersRepository.getAll({ name });

    return getUsers;
  }

  static async getByUserId({ id }) {
    const getPosts = await postsRepository.getByUserId({ user_id: id });

    return getPosts;
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
