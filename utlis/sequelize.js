const { Sequelize } = require("sequelize");

/**
 *
 * @param {Sequelize} sequelize
 */
const startSequelize = async (sequelize) => {
  try {
    // untuk mengecek koneksi ke database
    await sequelize.authenticate();

    // untuk melakukan sinkronisasi model ke database
    await sequelize.sync({ alter: true });

    // untuk melakukan debug sequelize
    console.log("Connection to database established!");
    console.log(
      "Available models on sequelize =>",
      Object.keys(sequelize.models).join(", ")
    );
  } catch (e) {
    console.error("Failed to establish connection to database!", e);
  }
};

module.exports = {
    startSequelize,
};