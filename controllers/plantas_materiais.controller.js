const PlantasMateriais = require("../models/plantas_materiais.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio."
        });
    }
    var values = req.body.materiais.map((item) => {
        return [parseInt(item.idplanta), parseInt(item.idmaterial), parseInt(item.coordenadaX), parseInt(item.coordenadaY)]
    });

    PlantasMateriais.create(
        req.body.idplanta,
        values,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Ocorreu um erro ao criar os registros."
                });
            else res.send(data);
        }
    );
};

exports.findAll = (req, res) => {
    PlantasMateriais.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao recuperar os registros."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    PlantasMateriais.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foi encontrado registro com código ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Erro ao recuperar o registro com o código " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio."
        });
    }

    PlantasMateriais.updateById(
        req.params.id,
        new PlantasMateriais(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Não foi encontrado registro com código ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Erro ao atualizar o registro com código " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    PlantasMateriais.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foi encontrado registro com código ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Não foi possível excluir o registro com código " + req.params.id
                });
            }
        } else res.send({ message: `O registro foi excluído com sucesso.` });
    });
};

exports.deleteAll = (req, res) => {
    PlantasMateriais.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao remover todos os registros."
            });
        else res.send({ message: `Todos os registros foram excluídos com sucesso.` });
    });
};