const { Plantas_Materiais } = require('../models');

class PlantasMateriaisController {

    async create(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }
        
            await Plantas_Materiais.destroy({
                where: {
                    idplanta: req.body.idplanta
                }
            });

            const materiais = await Plantas_Materiais.bulkCreate(req.body.materiais);

            return res.json(materiais);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findPorPlanta(req, res) {
        try {
            const plantas = await Plantas_Materiais.findAll({
                where: {
                    idplanta: req.params.id
                }
            });

            return res.json(plantas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new PlantasMateriaisController();