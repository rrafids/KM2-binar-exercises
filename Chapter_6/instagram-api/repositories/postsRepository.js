const { Post } = require("../models");

class PostsRepository {
  static async create({ user_id, title, description }) {
    const createdPost = Post.create({
      user_id,
      title,
      description,
    });

    return createdPost;
  }

  static async getByID({ id }) {
    const getPost = await Post.findOne({ where: { id } });

    return getPost;
  }

  static async deleteByID({ id }) {
    const deletedPost = await Post.destroy({ where: { id } });

    return deletedPost;
  }

  static async updateByID({ id, title, description }) {
    const updatedPost = await Post.update(
      {
        title,
        description,
      },
      { where: { id } }
    );

    return updatedPost;
  }
}

module.exports = PostsRepository;
