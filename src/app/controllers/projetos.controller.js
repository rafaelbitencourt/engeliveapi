const { projetos } = require('../models');
const BaseController = require('./base.controller');

class ProjetosController extends BaseController {
    async findPorObra(req, res) {
        try {
            const projetosTipos = await this.getModel(req.tenantId).findAll({
                where: {
                    idobra: req.params.id
                }
            });

            return res.json(projetosTipos);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new ProjetosController(projetos);