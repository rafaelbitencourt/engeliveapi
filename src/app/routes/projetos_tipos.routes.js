const { Router } = require('express');
const ProjetosTiposController = require('../controllers/projetos_tipos.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/projetos_tipos', [authJwt.verifyToken], ProjetosTiposController.findAll.bind(ProjetosTiposController));

routes.get('/projetos_tipos/:id', [authJwt.verifyToken], ProjetosTiposController.findOne.bind(ProjetosTiposController));

routes.post('/projetos_tipos', [authJwt.verifyToken], ProjetosTiposController.create.bind(ProjetosTiposController));

routes.put('/projetos_tipos/:id', [authJwt.verifyToken], ProjetosTiposController.update.bind(ProjetosTiposController));

routes.delete('/projetos_tipos/:id', [authJwt.verifyToken], ProjetosTiposController.delete.bind(ProjetosTiposController));

module.exports = routes;