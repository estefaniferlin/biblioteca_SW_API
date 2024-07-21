const { Router } = require('express');
const { getLivros, addLivro, updateLivro, deleteLivro, getLivroPorCodigo } = require('../controllers/livroController');

const rotasLivros = new Router();

rotasLivros.route('/livro')
    .get(getLivros)
    .post(addLivro)
    .put(updateLivro)

rotasLivros.route('/livro/:codigo')
    .get(getLivroPorCodigo)
    .delete(deleteLivro)

module.exports = { rotasLivros };