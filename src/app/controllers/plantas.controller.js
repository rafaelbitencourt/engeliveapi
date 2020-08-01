const { Plantas } = require('../models');

class PlantasController {

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

            const plantas = await Plantas.create(dados);

            return res.json(plantas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const plantas = await Plantas.findAll();

            return res.json(plantas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findPorProjeto(req, res) {
        try {
            const plantas = await Plantas.findAll({
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

    async findOne(req, res) {
        try {
            const plantas = await Plantas.findByPk(req.params.id);

            return res.json(plantas);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }

            const plantas = await Plantas.findByPk(req.params.id);

            await plantas.update(req.body);

            return res.json({ plantas });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const plantas = await Plantas.findByPk(req.params.id);

            await plantas.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new PlantasController();