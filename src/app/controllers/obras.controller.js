const { obras } = require('../models');
const ProjetosController = require('./projetos.controller');
const PlantasController = require('./plantas.controller');
const TiposProjetosController = require('./tipos_projetos.controller');
const BaseController = require('./base.controller');

class ObrasController extends BaseController {
    async findMenu(req, res) {
        try {
            const obras = await this.getModel(req.tenantId).findAll({
                attributes: ['id', 'nome'],
                include: [{ 
                    model: ProjetosController.getModel(req.tenantId),
                    attributes: ['id'],
                    include: [{
                        attributes: ['nome'],
                        model: TiposProjetosController.getModel(req.tenantId)
                    }, {
                        attributes: ['id', 'descricao'],
                        model: PlantasController.getModel(req.tenantId)
                    }]
                }]
            });

            return res.json(obras);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new ObrasController(obras);