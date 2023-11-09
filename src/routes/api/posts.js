const router = require('express').Router();

const PostsController = require('../../controllers/posts.controllers');

router.get('/', PostsController.getAllPosts);
router.get('/:postId', PostsController.getPostById);
router.post('/', PostsController.createPost);


module.exports = router;