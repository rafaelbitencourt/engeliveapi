module.exports = (sequelize, DataTypes) => {
    const Plantas = sequelize.define('Plantas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idprojeto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: Projetos,
            //     key: 'id'
            // }
        },
        descricao: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        imagem: {
            type: DataTypes.BLOB('long'),
            allowNull: false
        }
    });

    return Plantas;
};