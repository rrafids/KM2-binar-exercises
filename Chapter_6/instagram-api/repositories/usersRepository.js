const { User, Post } = require("../models");

class UsersRepository {
  static async getByID({ id }) {
    const getUser = await User.findOne({ where: { id } });

    return getUser;
  }

  static async getByEmail({ email }) {
    const getUser = await User.findOne({ where: { email } });

    return getUser;
  }

  static async create({ name, email, password, role, picture }) {
    const createdUser = User.create({
      name,
      email,
      password,
      role,
      picture
    });

    return createdUser;
  }

  static async deleteByID({ id }) {
    const deletedUser = await User.destroy({ where: { id } });

    return deletedUser;
  }

  static async getPostsByID({ id }) {
    const getPosts = await Post.findAll({ where: { user_id: id } });

    return getPosts;
  }
}

module.exports = UsersRepository;
