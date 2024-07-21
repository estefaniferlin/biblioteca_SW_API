const { Router } = require('express');
const { getEditoras, addEditora, updateEditora, deleteEditora, getEditoraPorCodigo } = require('../controllers/editoraController');

const rotasEditoras = new Router();

rotasEditoras.route('/editora')
    .get(getEditoras)
    .post(addEditora)
    .put(updateEditora)

    rotasEditoras.route('/editora/:codigo')
    .get(getEditoraPorCodigo)
    .delete(deleteEditora)

module.exports = { rotasEditoras };