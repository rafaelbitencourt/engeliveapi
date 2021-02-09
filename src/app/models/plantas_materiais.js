module.exports = (sequelize, DataTypes) => {
    const Plantas_Materiais = sequelize.define('plantas_Materiais', {
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
        idmaterial: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coordenadaX: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coordenadaY: {
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

    return Plantas_Materiais;
};