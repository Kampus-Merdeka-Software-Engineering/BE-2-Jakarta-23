const { DataTypes } = require('sequelize');
const sequalize = require('../config/sequelize');

const Contact= sequalize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name : DataTypes.STRING,
    email: DataTypes.STRING,
    message :  DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});

module.exports = Contact;