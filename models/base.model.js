module.exports = model => {
    const sql = require("./db.js");

    model.create = (novoModel, result) => {
        sql.query(`INSERT INTO ${model.table} SET ?`, novoModel, (err, res) => {
            if (err) {
                console.log("Erro: ", err);
                result(err, null);
                return;
            }
        
            console.log("Registro inserido: ", { ...novoModel, id: res.insertId });
            result(null, { ...novoModel, id: res.insertId });
        });
    };

    model.findById = (id, result) => {
        sql.query(`SELECT * FROM ${model.table} WHERE id = ${id}`, (err, res) => {
            if (err) {
                console.log("Erro: ", err);
                result(err, null);
                return;
            }
        
            if (res.length) {
                console.log("Registro encontrado: ", res[0]);
                result(null, res[0]);
                return;
            }

            result({ kind: "not_found" }, null);
        });
    };

    model.getAll = result => {
        sql.query(`SELECT * FROM ${model.table}`, (err, res) => {
            if (err) {
                console.log("Erro: ", err);
                result(null, err);
                return;
            }

            console.log("Registros: ", res);
            result(null, res);
        });
    };

    model.updateById = (id, data, result) => {

        const modelAux = {...data};
        delete modelAux.id;

        var colunas = Object.keys(modelAux);
        var colunasSQL = colunas.map(function (coluna) {
            return coluna += ' = ?';
        }).join(',');
        
        valoresSQL = Object.values(modelAux);

        sql.query(
            `UPDATE ${model.table} SET ${colunasSQL} WHERE id = ?`,
            valoresSQL.concat(id),
            (err, res) => {
                if (err) {
                    console.log("Erro: ", err);
                    result(null, err);
                    return;
                }
        
                if (res.affectedRows == 0) {
                    result({ kind: "not_found" }, null);
                    return;
                }
        
                console.log("Registro alterado: ", { ...data, id: id });
                result(null, { ...data, id: id });
            }
        );
    };

    model.remove = (id, result) => {
        sql.query(`DELETE FROM ${model.table} WHERE id = ?`, id, (err, res) => {
            if (err) {
                console.log("Erro: ", err);
                result(null, err);
                return;
            }
      
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
      
            console.log("Registro excluído com id: ", id);
            result(null, res);
        });
    };

    model.removeAll = result => {
        sql.query(`DELETE FROM ${model.table}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
      
            console.log(`${res.affectedRows} registros excluídos.`);
            result(null, res);
        });
    };
};