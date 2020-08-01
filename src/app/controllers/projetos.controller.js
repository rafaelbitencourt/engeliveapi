const { Projetos }  = require('../models');

class ProjetosController {

    async create(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }
            const projetos = await Projetos.create(req.body);

            return res.json(projetos);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const projetos = await Projetos.findAll();

            return res.json(projetos);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findOne(req, res) {
        try {
            const projetos = await Projetos.findByPk(req.params.id);

            return res.json(projetos);
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

            const projeto = await Projetos.findByPk(req.params.id);

            await projeto.update(req.body);

            return res.json({ projeto });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const projeto = await Projetos.findByPk(req.params.id);

            await projeto.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new ProjetosController();