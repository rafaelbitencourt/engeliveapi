const { Projetos } = require('../models');
const BaseController = require('./base.controller');

class ProjetosController extends BaseController {}

module.exports = new ProjetosController(Projetos);