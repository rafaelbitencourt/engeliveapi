const { Router } = require('express');
const TiposProjetosController = require('../controllers/tipos_projetos.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/tipos_projetos', [authJwt.verifyToken], TiposProjetosController.findAll.bind(TiposProjetosController));

routes.get('/tipos_projetos/:id', [authJwt.verifyToken], TiposProjetosController.findOne.bind(TiposProjetosController));

routes.post('/tipos_projetos', [authJwt.verifyToken], TiposProjetosController.create.bind(TiposProjetosController));

routes.put('/tipos_projetos/:id', [authJwt.verifyToken], TiposProjetosController.update.bind(TiposProjetosController));

routes.delete('/tipos_projetos/:id', [authJwt.verifyToken], TiposProjetosController.delete.bind(TiposProjetosController));

module.exports = routes;