const { DataTypes } = require('sequelize');
const sequalize = require('../config/sequelize');

const Register= sequalize.define('Register', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username : DataTypes.STRING,
    email: DataTypes.STRING,
    password :  DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});

module.exports = Register;