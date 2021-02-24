const { projetos_tipos } = require('../models');
const BaseController = require('./base.controller');

class ProjetosTiposController extends BaseController {
    async findPorProjeto(req, res) {
        try {
            const projetosTipos = await this.getModel(req.tenantId).findAll({
                where: {
                    idprojeto: req.params.id
                }
            });

            return res.json(projetosTipos);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new ProjetosTiposController(projetos_tipos);