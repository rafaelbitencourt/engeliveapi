const { tipos_projetos } = require('../models');
const BaseController = require('./base.controller');

class TiposProjetosController extends BaseController {}

module.exports = new TiposProjetosController(tipos_projetos);