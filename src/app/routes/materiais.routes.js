const { Router } = require('express');
const MateriaisController = require('../controllers/materiais.controller');
const { authJwt } = require("../middlewares");
const multer = require('multer');

var storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const routes = Router();

routes.get('/materiais', [authJwt.verifyToken], MateriaisController.findAll.bind(MateriaisController));

routes.get('/materiais/:id', [authJwt.verifyToken], MateriaisController.findOne.bind(MateriaisController));

routes.post('/materiais', [authJwt.verifyToken, upload.single('imagem')], MateriaisController.create.bind(MateriaisController));

routes.put('/materiais/:id', [authJwt.verifyToken], MateriaisController.update.bind(MateriaisController));

routes.delete('/materiais/:id', [authJwt.verifyToken], MateriaisController.delete.bind(MateriaisController));

module.exports = routes;