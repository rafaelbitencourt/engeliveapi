module.exports = (sequelize, DataTypes) => {
    const Detalhes = sequelize.define('detalhes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idtenant: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        idprojeto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        imagem: {
            type: DataTypes.BLOB('long'),
            allowNull: false
        }
    }, {
        defaultScope: {
            where: {
                idtenant: 0
            }
        },
        scopes: {
            tenant(value) {
                return {
                    where: {
                        idtenant: value
                    }
                }
            }
        }
    });

    return Detalhes;
};