const { Materiais }  = require('../models');

class MateriaisController {

    async create(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }
            const materiais = await Materiais.create(req.body);

            return res.json(materiais);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const materiais = await Materiais.findAll();

            return res.json(materiais);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async findOne(req, res) {
        try {
            const materiais = await Materiais.findByPk(req.params.id);

            return res.json(materiais);
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

            const materiais = await Materiais.findByPk(req.params.id);

            await materiais.update(req.body);

            return res.json({ materiais });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const materiais = await Materiais.findByPk(req.params.id);

            await materiais.destroy();

            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new MateriaisController();