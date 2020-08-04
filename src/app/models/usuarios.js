module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define('Usuarios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idtenant: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    });

    return Usuarios;
};