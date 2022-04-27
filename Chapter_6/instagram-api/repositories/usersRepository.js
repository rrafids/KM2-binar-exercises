const { User, Post } = require("../models");

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

  static async getPostsByID({ id }) {
    const getPosts = await Post.findAll({ where: { user_id: id } });

    return getPosts;
  }
}

module.exports = UsersRepository;
