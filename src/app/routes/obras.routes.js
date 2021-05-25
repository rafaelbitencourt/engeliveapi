const { Router } = require('express');
const ObrasController = require('../controllers/obras.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/menu', [authJwt.verifyToken], ObrasController.findMenu.bind(ObrasController));

routes.get('/obras', [authJwt.verifyToken], ObrasController.findAll.bind(ObrasController));

routes.get('/obras/:id', [authJwt.verifyToken], ObrasController.findOne.bind(ObrasController));

routes.post('/obras', [authJwt.verifyToken], ObrasController.create.bind(ObrasController));

routes.put('/obras/:id', [authJwt.verifyToken], ObrasController.update.bind(ObrasController));

routes.delete('/obras/:id', [authJwt.verifyToken], ObrasController.delete.bind(ObrasController));

module.exports = routes;