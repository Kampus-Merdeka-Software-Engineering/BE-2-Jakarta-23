// init sequalize config
const Sequelize = require('sequelize');

const MYSQL_URI = process.env.MYSQL_URI;

const sequalize = new Sequelize(MYSQL_URI,{
    dialect: 'mysql',
});


module.exports = sequalize;
