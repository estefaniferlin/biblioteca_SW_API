const { Router } = require('express');
const { getAutores, addAutor, updateAutor, deleteAutor, getAutorPorCodigo } = require('../controllers/autorController');

const rotasAutores = new Router();

rotasAutores.route('/autor')
    .get(getAutores)
    .post(addAutor)
    .put(updateAutor)

    rotasAutores.route('/autor/:codigo')
    .get(getAutorPorCodigo)
    .delete(deleteAutor)

module.exports = { rotasAutores };