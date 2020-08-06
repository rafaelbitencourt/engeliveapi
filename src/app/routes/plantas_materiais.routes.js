const { Router } = require('express');
const PlantasMateriaisController = require('../controllers/plantas_materiais.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/plantas_materiais/:id', [authJwt.verifyToken], PlantasMateriaisController.findPorPlanta.bind(PlantasMateriaisController));

routes.post('/plantas_materiais', [authJwt.verifyToken], PlantasMateriaisController.create.bind(PlantasMateriaisController));

module.exports = routes;