const { Router } = require('express');
const PlantasMateriaisController = require('../controllers/plantas_materiais.controller');

const routes = Router();

routes.get('/plantas_materiais/:id', PlantasMateriaisController.findPorPlanta);

routes.post('/plantas_materiais', PlantasMateriaisController.create);

module.exports = routes;