const { Materiais }  = require('../models');
const BaseController = require('./base.controller');

class MateriaisController extends BaseController {}

module.exports = new MateriaisController(Materiais);