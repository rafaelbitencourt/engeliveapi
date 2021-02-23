module.exports = (sequelize, DataTypes) => {
    const Projetos_Tipos = sequelize.define('projetos_tipos', {
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
        idtipoprojeto: {
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
    
    return Projetos_Tipos;
};