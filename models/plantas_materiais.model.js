const sql = require("./db.js");

const PlantasMateriais = function (plantasMateriais) {
    this.id = plantasMateriais.id;
    this.idplanta = plantasMateriais.idplanta;
    this.idmaterial = plantasMateriais.idmaterial;
    this.coordenadaX = plantasMateriais.coordenadaX;
    this.coordenadaY = plantasMateriais.coordenadaY;
};

PlantasMateriais.findById = (id, result) => {
    sql.query(`SELECT * FROM plantas_materiais WHERE idplanta = ${id}`, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
        }

        console.log("Registros: ", res);
        result(null, res);
    });
};

PlantasMateriais.create = (idplanta, values, result) => {
    sql.beginTransaction((err) => {
        if (err) { throw err; }
        sql.query('DELETE FROM plantas_materiais WHERE idplanta = ?', idplanta, (error, res) => {
            if (error) {
                return sql.rollback(() => {
                    result(error, null);
                });
            }
            console.log(`${res.affectedRows} registros excluídos.`);

            if(values && values.length) {
                sql.query('INSERT INTO plantas_materiais(idplanta, idmaterial, coordenadaX, coordenadaY) VALUES ?', [values], (error, res) => {
                    if (error) {
                        return sql.rollback(() => {
                            result(error, null);
                        });
                    }
                    console.log(`${res.affectedRows} registros inseridos.`);
                    sql.commit((err) => {
                        if (err) {
                            return sql.rollback(() => {
                                result(err, null);
                            });
                        }
                        console.log('success! '+res);
                        result(null, res);
                    });
                });
            } else {
                sql.commit((err) => {
                    if (err) {
                        return sql.rollback(() => {
                            result(err, null);
                        });
                    }
                    result(null, res);
                });
            }
        });
    });
};

module.exports = PlantasMateriais;