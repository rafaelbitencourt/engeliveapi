module.exports = (sequelize, DataTypes) => {
    const Plantas_Materiais = sequelize.define('Plantas_Materiais', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
    });

    return Plantas_Materiais;
};