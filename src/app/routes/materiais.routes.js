const { Router } = require('express');
const MateriaisController = require('../controllers/materiais.controller');

const routes = Router();

routes.get('/materiais', MateriaisController.findAll);

routes.get('/materiais/:id', MateriaisController.findOne);

routes.post('/materiais', MateriaisController.create);

routes.put('/materiais/:id', MateriaisController.update);

routes.delete('/materiais/:id', MateriaisController.delete);

module.exports = routes;