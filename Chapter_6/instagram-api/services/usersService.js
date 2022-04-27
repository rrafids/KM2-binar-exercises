const usersRepository = require("../repositories/usersRepository");

class UsersService {
  static async getPostsByID({ id }) {
    const getPosts = await usersRepository.getPostsByID({
      id,
    });

    return {
      status: true,
      status_code: 200,
      message: "Success",
      data: {
        posts: getPosts,
      },
    };
  }
}

module.exports = UsersService;
