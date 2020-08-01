const { Router } = require('express');
const ProjetosController = require('../controllers/projetos.controller');

const routes = Router();

routes.get('/projetos', ProjetosController.findAll);

routes.get('/projetos/:id', ProjetosController.findOne);

routes.post('/projetos', ProjetosController.create);

routes.put('/projetos/:id', ProjetosController.update);

routes.delete('/projetos/:id', ProjetosController.delete);

module.exports = routes;