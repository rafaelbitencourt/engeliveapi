const { projetos } = require('../models');
const BaseController = require('./base.controller');
const TiposProjetosController = require('./tipos_projetos.controller');

class ProjetosController extends BaseController {
    async findPorObra(req, res) {
        try {
            const projetos = await this.getModel(req.tenantId).findAll({
                where: {
                    idobra: req.params.id
                },
                include: [{
                    model: TiposProjetosController.getModel(req.tenantId)
                }]
            });

            return res.json(projetos);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new ProjetosController(projetos);