module.exports = (sequelize, DataTypes) => {
    const Projetos = sequelize.define('Projetos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        previsao: {
            type: DataTypes.DATEONLY,
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

    return Projetos;
};