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
    });

    return Projetos;
};