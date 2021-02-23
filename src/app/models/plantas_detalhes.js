module.exports = (sequelize, DataTypes) => {
    const Plantas_Detalhes = sequelize.define('plantas_detalhes', {
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
        idplanta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        iddetalhe: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coordenadax: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coordenaday: {
            type: DataTypes.INTEGER,
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

    return Plantas_Detalhes;
};