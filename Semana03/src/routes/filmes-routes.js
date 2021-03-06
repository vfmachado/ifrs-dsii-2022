const { Router } = require('express');

// IMPORTAÇÃO DO FILMES-CONTROLLER
// CONST NOME-RECURSO = REQUIRE(ARQUIVO);
const { FilmesController } = require('../controllers/filmes-controller');

// const Router = require('express').Router

// const express = require('express')
// const Router = express.Router

// O NOSSO ROUTER COMEÇA COM /filmes
const routes = Router();

const filmesController = new FilmesController();

routes.get('/', filmesController.listar);

routes.get('/:id', filmesController.detalhar);

routes.post('/', filmesController.cadastrar)

module.exports = routes;