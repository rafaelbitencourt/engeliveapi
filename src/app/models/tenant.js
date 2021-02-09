module.exports = (sequelize, DataTypes) => {
    const Tenants = sequelize.define('tenants', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    });

    return Tenants;
};