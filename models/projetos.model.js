const Projetos = function (projeto) {
    this.id = projeto.id;
    this.nome = projeto.nome;
    this.previsao = projeto.previsao;
};

Projetos.table = 'projetos';

require("./base.model.js")(Projetos);

module.exports = Projetos;