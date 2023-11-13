const router = require('express').Router();

const PostsController = require('../../controllers/posts.controllers');

router.get('/', PostsController.getAllPosts);
router.get('/:postId', PostsController.getPostById);

router.post('/', PostsController.createPost);


router.put('/:postId', PostsController.updatePost)

router.delete('/:postId', PostsController.deletePost);


module.exports = router;