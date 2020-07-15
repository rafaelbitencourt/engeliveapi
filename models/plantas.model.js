const sql = require("./db.js");

const Plantas = function(plantas) {
    this.id = plantas.id;
    this.idprojeto = plantas.idprojeto;
    this.descricao = plantas.descricao;
    this.imagem = plantas.imagem;
};
  
Plantas.table = 'plantas';
  
require("./base.model.js")(Plantas);

Plantas.findPorProjeto = (id, result) => {
    sql.query(`SELECT * FROM ${Plantas.table} WHERE idprojeto = ${id}`, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
        }

        console.log("Registros: ", res);
        result(null, res);
    });
};
  
module.exports = Plantas;