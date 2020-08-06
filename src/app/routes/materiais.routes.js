const { Router } = require('express');
const MateriaisController = require('../controllers/materiais.controller');
const { authJwt } = require("../middlewares");

const routes = Router();

routes.get('/materiais', [authJwt.verifyToken], MateriaisController.findAll.bind(MateriaisController));

routes.get('/materiais/:id', [authJwt.verifyToken], MateriaisController.findOne.bind(MateriaisController));

routes.post('/materiais', [authJwt.verifyToken], MateriaisController.create.bind(MateriaisController));

routes.put('/materiais/:id', [authJwt.verifyToken], MateriaisController.update.bind(MateriaisController));

routes.delete('/materiais/:id', [authJwt.verifyToken], MateriaisController.delete.bind(MateriaisController));

module.exports = routes;