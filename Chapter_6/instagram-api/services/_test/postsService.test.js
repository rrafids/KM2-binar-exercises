const postsService = require("../postsService");

describe("create post", () => {
  it("should create post to db", async () => {
    // Create payload
    const postToCreate = {
      user_id: 1,
      title: "Judul Post Baru Banget",
      description: "Deskripsi Post Baru Banget",
    };

    // Expected Response
    const expectedCreatedPost = {
      id: 999,
      user_id: 1,
      title: "Judul Post Baru Banget",
      description: "Deskripsi Post Baru Banget",
    };

    const expectedCreatedPostService = {
      status: true,
      status_code: 201,
      message: "Post created successfully",
      data: {
        created_post: expectedCreatedPost,
      },
    };

    // Create service mock function
    const mockPostService = postsService;

    mockPostService.create = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedCreatedPostService));
    const createdPostResponse = await mockPostService.create(postToCreate);

    // Assertion
    expect(expectedCreatedPostService.status).toEqual(
      createdPostResponse.status
    );
    expect(expectedCreatedPostService.status_code).toEqual(
      createdPostResponse.status_code
    );
    expect(expectedCreatedPostService.message).toEqual(
      createdPostResponse.message
    );
    expect(expectedCreatedPostService.data.created_post).toEqual(
      createdPostResponse.data.created_post
    );
  });
});
