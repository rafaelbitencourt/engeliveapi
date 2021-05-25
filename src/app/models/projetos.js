module.exports = (sequelize, DataTypes) => {
    const Projetos = sequelize.define('projetos', {
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
        idobra: {
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

    Projetos.associate = function(models) {
        Projetos.belongsTo(models['tipos_projetos'], {
            foreignKey: 'idtipoprojeto'
        });
        Projetos.hasMany(models['plantas'], {
            foreignKey: 'idprojeto'
        });
    };
    
    return Projetos;
};