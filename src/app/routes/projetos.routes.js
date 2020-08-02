const { Router } = require('express');
const ProjetosController = require('../controllers/projetos.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/projetos', [authJwt.verifyToken], ProjetosController.findAll);

routes.get('/projetos/:id', [authJwt.verifyToken], ProjetosController.findOne);

routes.post('/projetos', [authJwt.verifyToken], ProjetosController.create);

routes.put('/projetos/:id', [authJwt.verifyToken], ProjetosController.update);

routes.delete('/projetos/:id', [authJwt.verifyToken], ProjetosController.delete);

module.exports = routes;