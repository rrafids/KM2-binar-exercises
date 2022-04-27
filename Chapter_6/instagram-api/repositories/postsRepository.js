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
    const deletePost = await Post.destroy({ where: { id } });

    return deletePost;
  }

  static async updateByID({ id, title, description }) {
    const deletePost = await Post.update(
      {
        title,
        description,
      },
      { where: { id } }
    );

    return deletePost;
  }
}

module.exports = PostsRepository;
