const { Router } = require('express');
const { getLocalizacoes, addLocalizacao, updateLocalizacao, deleteLocalizacao, getLocalizacaoPorCodigo } = require('../controllers/localizacaoController');

const rotasLocalizacoes = new Router();

rotasLocalizacoes.route('/localizacao')
    .get(getLocalizacoes)
    .post(addLocalizacao)
    .put(updateLocalizacao)

    rotasLocalizacoes.route('/localizacao/:codigo')
    .get(getLocalizacaoPorCodigo)
    .delete(deleteLocalizacao)

module.exports = { rotasLocalizacoes };