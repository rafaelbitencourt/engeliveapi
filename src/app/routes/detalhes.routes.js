const { Router } = require('express');
const DetalhesController = require('../controllers/detalhes.controller');
const { authJwt } = require("../middlewares");
const multer = require('multer');

var storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const routes = Router();

routes.get('/detalhes', [authJwt.verifyToken], DetalhesController.findAll.bind(DetalhesController));

routes.get('/detalhes/:id', [authJwt.verifyToken], DetalhesController.findOne.bind(DetalhesController));

routes.get(`/projeto/:id/detalhes`, [authJwt.verifyToken], DetalhesController.findPorProjeto.bind(DetalhesController));

routes.post('/detalhes', [authJwt.verifyToken, upload.single('imagem')], DetalhesController.create.bind(DetalhesController));

routes.put('/detalhes/:id', [authJwt.verifyToken, upload.single('imagem')], DetalhesController.update.bind(DetalhesController));

routes.delete('/detalhes/:id', [authJwt.verifyToken], DetalhesController.delete.bind(DetalhesController));

module.exports = routes;