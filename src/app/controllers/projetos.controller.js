const { projetos } = require('../models');
const BaseController = require('./base.controller');

class ProjetosController extends BaseController {}

module.exports = new ProjetosController(projetos);