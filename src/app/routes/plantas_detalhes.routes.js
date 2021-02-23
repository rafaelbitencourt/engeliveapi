const { Router } = require('express');
const PlantasDetalhesController = require('../controllers/plantas_detalhes.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/plantas_detalhes/:id', [authJwt.verifyToken], PlantasDetalhesController.findPorPlanta.bind(PlantasDetalhesController));

routes.post('/plantas_detalhes', [authJwt.verifyToken], PlantasDetalhesController.create.bind(PlantasDetalhesController));

module.exports = routes;