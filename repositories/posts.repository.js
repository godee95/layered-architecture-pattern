// repositories/posts.repository.js

const { Posts } = require('../models');

class PostRepository {
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const posts = await Posts.findAll();

    return posts;
  }

  findPost = async (postId) => {
    const post = await Posts.findByPk(postId);

    return post;
  }

  createPost = async (nickname, password, title, content) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await Posts.create({ nickname, password, title, content });

    return createPostData;
  }

  putPost = async(postId, password, title, content) => {
    const putPostData = await Posts.update(
      { title, content },
      { where: { postId, password } }
    );

    return putPostData;
  }

  deletePost = async(postId, password) => {
    const deletePostData = await Posts.destroy(
      {where: { postId, password }}
    );

    return deletePostData;
  }
}

module.exports = PostRepository;