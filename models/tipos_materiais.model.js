const TiposMateriais = function (tiposMateriais) {
    this.id = tiposMateriais.id;
    this.nome = tiposMateriais.nome;
    this.marcador = tiposMateriais.marcador;
    this.cor = tiposMateriais.cor;
};

TiposMateriais.table = 'tipos_materiais';

require("./base.model.js")(TiposMateriais);

module.exports = TiposMateriais;