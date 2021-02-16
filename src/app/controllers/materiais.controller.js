const { materiais }  = require('../models');
const BaseController = require('./base.controller');

class MateriaisController extends BaseController {
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
                    message: "É necessário informar a imagem do detalhe."
                });
                return;
            }
        
            dados.imagem = req.file.buffer;

            const materiais = await this.getModel(req.tenantId).create(dados);

            return res.json(materiais);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new MateriaisController(materiais);