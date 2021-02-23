const { projetos_tipos } = require('../models');
const BaseController = require('./base.controller');

class ProjetosTiposController extends BaseController {}

module.exports = new ProjetosTiposController(projetos_tipos);