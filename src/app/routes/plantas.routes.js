const { Router } = require('express');
const PlantasController = require('../controllers/plantas.controller');
const { authJwt } = require("../middlewares");
const multer = require('multer');

var storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const routes = Router();

routes.get('/plantas', [authJwt.verifyToken], PlantasController.findAll.bind(PlantasController));

routes.get('/plantas/:id', [authJwt.verifyToken], PlantasController.findOne.bind(PlantasController));

routes.get(`/projeto/:id/plantas`, [authJwt.verifyToken], PlantasController.findPorProjeto.bind(PlantasController));

routes.post('/plantas', [authJwt.verifyToken, upload.single('imagem')], PlantasController.create.bind(PlantasController));

routes.put('/plantas/:id', [authJwt.verifyToken], PlantasController.update.bind(PlantasController));

routes.delete('/plantas/:id', [authJwt.verifyToken], PlantasController.delete.bind(PlantasController));

module.exports = routes;