module.exports = (sequelize, DataTypes) => {
    const Materiais = sequelize.define('Materiais', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
    });

    return Materiais;
};