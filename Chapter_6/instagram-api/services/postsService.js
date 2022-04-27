const postsRepository = require("../repositories/postsRepository");

class PostsService {
  static async create({ user_id, title, description }) {
    if (!title) {
      return {
        status: false,
        status_code: 400,
        message: "Password wajib diisi",
        data: {
          registered_user: null,
        },
      };
    }

    if (!description) {
      return {
        status: false,
        status_code: 400,
        message: "Deskripsi wajib diisi",
        data: {
          registered_user: null,
        },
      };
    }

    const createdPost = await postsRepository.create({
      user_id,
      title,
      description,
    });

    return {
      status: true,
      status_code: 201,
      message: "Post created successfully",
      data: {
        created_post: createdPost,
      },
    };
  }

  static async deleteByID({ id, user_id }) {
    const getPost = await postsRepository.getByID({ id });

    if (getPost.user_id == user_id) {
      const deletedPost = await postsRepository.deleteByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Post deleted successfully",
        data: {
          deleted_post: deletedPost,
        },
      };
    } else {
      return {
        status: true,
        status_code: 401,
        message: "Resource Unauthorized",
        data: {
          deleted_post: null,
        },
      };
    }
  }

  static async updateByID({ id, user_id, title, description }) {
    const getPost = await postsRepository.getByID({ id });

    if (getPost.user_id == user_id) {
      const updatedPost = await postsRepository.updateByID({
        id,
        title,
        description,
      });

      return {
        status: true,
        status_code: 200,
        message: "Post updated successfully",
        data: {
          updated_post: updatedPost,
        },
      };
    } else {
      return {
        status: true,
        status_code: 401,
        message: "Resource Unauthorized",
        data: {
          updated_post: null,
        },
      };
    }
  }
}

module.exports = PostsService;
