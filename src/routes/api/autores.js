const router = require('express').Router();


const AutoresController = require('../../controllers/autores.controllers');


router.get('/', AutoresController.getAllAutores);
router.get('/posts', AutoresController.getPostsAutorById);
router.get('/:autorId', AutoresController.getAutorById);

router.post('/', AutoresController.createAutor);

router.put('/:autorId', AutoresController.updateAutor);

router.delete('/:autorId', AutoresController.deleteAutor);

module.exports = router;