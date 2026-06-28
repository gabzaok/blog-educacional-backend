const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const postMiddleware = require('../middlewares/postMiddleware');

router.get('/', postController.getPosts);

router.get('/:id', postMiddleware.validateId, postController.getPostById);

router.post('/', postMiddleware.validatePost, postController.createPost);

module.exports = router;

// TODO: FALTA ADICIONAR OUTRAS ROTAS, EDIT, DELETE QUANDO O RENAN CONCLUIR
