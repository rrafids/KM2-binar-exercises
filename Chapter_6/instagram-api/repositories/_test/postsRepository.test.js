const postRepository = require("../postsRepository");

describe("create post", () => {
  it("should create post to db", async () => {
    const postToCreate = {
      user_id: 1,
      title: "Judul Post Baru Banget",
      description: "Deskripsi Post Baru Banget",
    };

    const createdPost = await postRepository.create(postToCreate);

    // Assertion
    expect(createdPost.user_id).toEqual(postToCreate.user_id);
    expect(createdPost.title).toEqual(postToCreate.title);
    expect(createdPost.description).toEqual(postToCreate.description);

    // Delete Test Data
    await postRepository.deleteByID({ id: createdPost.id });
  });
});

describe("get post by id", () => {
  it("should create post to db", async () => {
    // Create Data
    const postToCreate = {
      user_id: 1,
      title: "Judul Post Baru Banget",
      description: "Deskripsi Post Baru Banget",
    };

    const createdPost = await postRepository.create(postToCreate);

    const post = await postRepository.getByID({ id: createdPost.id });

    expect(post.user_id).toEqual(createdPost.user_id);
    expect(post.title).toEqual(createdPost.title);
    expect(post.description).toEqual(createdPost.description);

    // Delete Test Data
    await postRepository.deleteByID({ id: createdPost.id });
  });
});
