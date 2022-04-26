const { User } = require("../models");

class UsersRepository {
  static async getByEmail({ email }) {
    const getUser = await User.findOne({ where: { email: email } });

    return getUser;
  }

  static async create({ name, email, password }) {
    const createdUser = User.create({
      name,
      email,
      password,
    });

    return createdUser;
  }
}

module.exports = UsersRepository;
