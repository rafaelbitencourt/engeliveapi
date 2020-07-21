const Plantas = require("../models/plantas.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio."
        });
    }

    var dados = req.body;

    if (!req.file) {
        res.status(400).send({
            message: "É necessário informar a planta."
        });
        return;
    }

    dados.imagem = req.file.buffer;

    Plantas.create(
        new Plantas(dados),
        (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Ocorreu um erro ao criar o registro."
                });
            else res.send(data);
        }
    );
};

exports.findAll = (req, res) => {
    Plantas.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao recuperar os registros."
            });
        else res.send(data);
    });
};

exports.findPorProjeto = (req, res) => {
    Plantas.findPorProjeto(req.params.id, (err, data) => {
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

exports.findOne = (req, res) => {
    Plantas.findById(req.params.id, (err, data) => {
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

    var dados = new Plantas(req.body);
    delete dados.imagem;

    Plantas.updateById(
        req.params.id,
        dados,
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
    Plantas.remove(req.params.id, (err, data) => {
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
    Plantas.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu um erro ao remover todos os registros."
            });
        else res.send({ message: `Todos os registros foram excluídos com sucesso.` });
    });
};