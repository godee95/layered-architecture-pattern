// controllers/posts.controller.js

const PostService = require('../services/posts.service');

// Post의 컨트롤러(Controller)역할을 하는 클래스
class PostsController {
  postService = new PostService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getPosts = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const posts = await this.postService.findAllPost();

    res.status(200).json({ data: posts })
  }

  getPost = async(req, res, next) => {
    const { postId } = req.params;

    const post = await this.postService.findPost(postId);

    res.status(200).json({ data: post })
  }

  createPost = async (req, res, next) => {
    const { nickname, password, title, content } = req.body;

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createPostData = await this.postService.createPost(nickname, password, title, content);

    res.status(201).json({ data: createPostData });
  }

  putPost = async (req, res, next) => {
    const { postId } = req.params;
    const { password, title, content } = req.body;

    const putPostData = await this.postService.putPost(postId, password, title, content);

    res.status(201).json({ data: putPostData });
  }

  deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const { password } = req.body;

    const deletePostData = await this.postService.deletePost(postId, password);

    res.status(200).json({ data: deletePostData });
  }
}

module.exports = PostsController;