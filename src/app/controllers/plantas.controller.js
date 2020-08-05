const { Plantas } = require('../models');
const BaseController = require('./base.controller');

class PlantasController extends BaseController {

    async create(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }
        
            var dados = req.body;
        
            if (!req.file) {
                res.status(400).json({
                    message: "É necessário informar a planta."
                });
                return;
            }
        
            dados.imagem = req.file.buffer;

            const plantas = await this.getModel(req.tenantId).create(dados);

            return res.json(plantas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findPorProjeto(req, res) {
        try {
            const plantas = await this.getModel(req.tenantId).findAll({
                attributes: { exclude: ['imagem'] },
                where: {
                    idprojeto: req.params.id
                }
            });

            return res.json(plantas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new PlantasController(Plantas);