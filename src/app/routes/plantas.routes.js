const { Router } = require('express');
const PlantasController = require('../controllers/plantas.controller');
const multer = require('multer');

var storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const routes = Router();

routes.get('/plantas', PlantasController.findAll);

routes.get('/plantas/:id', PlantasController.findOne);

routes.get(`/projeto/:id/plantas`, PlantasController.findPorProjeto);

routes.post('/plantas', upload.single('imagem'), PlantasController.create);

routes.put('/plantas/:id', PlantasController.update);

routes.delete('/plantas/:id', PlantasController.delete);

module.exports = routes;