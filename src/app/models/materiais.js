module.exports = (sequelize, DataTypes) => {
    const Materiais = sequelize.define('materiais', {
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
        idtipo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(1000)
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

    return Materiais;
};