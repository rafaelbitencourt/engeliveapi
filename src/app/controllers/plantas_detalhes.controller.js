const { plantas_detalhes } = require('../models');
const BaseController = require('./base.controller');

class PlantasDetalhesController extends BaseController {

    async create(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }

            const model = this.getModel(req.tenantId);
        
            await model.destroy({
                where: {
                    idplanta: req.body.idplanta
                }
            });

            const detalhes = await model.bulkCreate(req.body.detalhes);
            
            return res.json(detalhes);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async findPorPlanta(req, res) {
        try {
            const plantas = await this.getModel(req.tenantId).findAll({
                where: {
                    idplanta: req.params.id
                }
            });

            return res.json(plantas);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new PlantasDetalhesController(plantas_detalhes);