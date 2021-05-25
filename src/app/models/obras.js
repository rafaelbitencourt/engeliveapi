module.exports = (sequelize, DataTypes) => {
    const Obras = sequelize.define('obras', {
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

    Obras.associate = function(models) {
        Obras.hasMany(models['projetos'], {
            foreignKey: 'idobra'
        });
    };
    
    return Obras;
};