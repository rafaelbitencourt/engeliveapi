const { obras } = require('../models');
const BaseController = require('./base.controller');

class ObrasController extends BaseController {}

module.exports = new ObrasController(obras);