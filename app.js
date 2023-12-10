// deklarasi package yang akan digunakan
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// menjalankan database
const sequelize = require('./config/sequelize');
const { startSequelize } = require('./utlis/sequelize')

// import models
const Contact = require('./models/contact-models');

// use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// membuat endpoint dari server
// const foodRoutes = require('./routes/food-routes');
const contactRoutes = require('./routes/contact-routes');
const { getAllDataContact } = require('./service/contact-service');
// app.use('/food', foodRoutes)
app.use('/contact', getAllDataContact)


// menjalankan server
app.listen(PORT, async () => {
    console.log(`server running on port ${PORT}`)
    await startSequelize(sequelize);
})