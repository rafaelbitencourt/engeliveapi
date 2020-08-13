module.exports = (sequelize, DataTypes) => {
    const Tenants = sequelize.define('Tenants', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    });

    return Tenants;
};