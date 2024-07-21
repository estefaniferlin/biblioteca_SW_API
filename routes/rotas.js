const { Router } = require('express');
const { rotasCategorias } = require('./rotasCategorias');
const { rotasLivros } = require('./rotasLivros');
const { rotasEditoras } = require('./rotasEditoras');
const { rotasAutores } = require('./rotasAutores');
const { rotasLocalizacoes } = require('./rotasLocalizacoes');

const rotas = new Router();

rotas.use(rotasCategorias); 
rotas.use(rotasLivros); 
rotas.use(rotasEditoras); 
rotas.use(rotasAutores);
rotas.use(rotasLocalizacoes); 

module.exports = rotas;