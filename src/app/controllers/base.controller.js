class BaseController {

    constructor(model) {
        this.model = model;
    }

    getModel(idtenant) {
        const model = this.model.scope({ method: ['tenant', idtenant] });

        model.addHook('beforeValidate', function (model) {
            model.idtenant = idtenant;
        });

        model.addHook('beforeBulkCreate', function (models) {
            models.forEach(function(model) {
                model.idtenant = idtenant;
            });            
        });

        return model;
    }

    async create(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }
            const result = await this.getModel(req.tenantId).create(req.body);

            return res.json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async findAll(req, res) {
        try {
            const result = await this.getModel(req.tenantId).findAll();

            return res.json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async findOne(req, res) {
        try {
            const result = await this.getModel(req.tenantId).findByPk(req.params.id);

            if(!result) {
                return res.status(400).json({ message: 'Registro não encontrado.' });
            }

            return res.json(result);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async update(req, res) {
        try {
            if (!req.body) {
                res.status(400).json({
                    message: "O conteúdo não pode ser vazio."
                });
            }

            const result = await this.getModel(req.tenantId).findByPk(req.params.id);

            await result.update(req.body);

            return res.json({ result });
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async delete(req, res) {
        try {
            const result = await this.getModel(req.tenantId).findByPk(req.params.id);

            await result.destroy();

            return res.json();
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = BaseController;