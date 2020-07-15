const Materiais = function(material) {
    this.id = material.id;
    this.idtipo = material.idtipo;
    this.nome = material.nome;
    this.descricao = material.descricao;
};
  
Materiais.table = 'materiais';
  
require("./base.model.js")(Materiais);
  
module.exports = Materiais;