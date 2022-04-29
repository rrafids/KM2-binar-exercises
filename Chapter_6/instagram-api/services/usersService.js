const usersRepository = require("../repositories/usersRepository");

class UsersService {
  static async getPostsByID({ id }) {
    try {
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
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_user: null,
        },
      };
    }
  }

  static async deleteByID({ id }) {
    try {
      const getUser = await usersRepository.getByID({ id });

      if (!getUser)
        return {
          status: false,
          status_code: 404,
          message: "User tidak ditemukan",
          data: {
            deleted_user: null,
          },
        };

      const deletedUser = await usersRepository.deleteByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_user: deletedUser,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_user: null,
        },
      };
    }
  }
}

module.exports = UsersService;
