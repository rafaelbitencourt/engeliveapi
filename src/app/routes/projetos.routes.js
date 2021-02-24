const { Router } = require('express');
const ProjetosController = require('../controllers/projetos.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/projetos', [authJwt.verifyToken], ProjetosController.findAll.bind(ProjetosController));

routes.get('/projetos/:id', [authJwt.verifyToken], ProjetosController.findOne.bind(ProjetosController));

routes.get(`/obra/:id/projetos`, [authJwt.verifyToken], ProjetosController.findPorObra.bind(ProjetosController));

routes.post('/projetos', [authJwt.verifyToken], ProjetosController.create.bind(ProjetosController));

routes.put('/projetos/:id', [authJwt.verifyToken], ProjetosController.update.bind(ProjetosController));

routes.delete('/projetos/:id', [authJwt.verifyToken], ProjetosController.delete.bind(ProjetosController));

module.exports = routes;