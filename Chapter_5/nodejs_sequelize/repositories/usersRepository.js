const { users } = require("../models");

class UsersRepository {
  static async getAll({ name }) {
    let getUsers = "";

    if (name) getUsers = await users.findAll({ where: { name: name } });
    else getUsers = await users.findAll();

    return getUsers;
  }

  static async create({ name, email }) {
    const createdUser = users.create({
      name,
      email,
    });

    return createdUser;
  }
}

module.exports = UsersRepository;
