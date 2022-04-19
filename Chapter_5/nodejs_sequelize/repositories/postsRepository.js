const { posts, users } = require("../models");

class PostsRepository {
  static async getByUserId({ user_id: userId }) {
    const getPosts = posts.findAll({
      where: { user_id: userId },
      include: [
        {
          model: users,
          as: "user",
        },
      ],
    });

    return getPosts;
  }
}

module.exports = PostsRepository;
