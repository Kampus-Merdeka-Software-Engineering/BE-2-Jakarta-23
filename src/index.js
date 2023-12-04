require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const userRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs');


const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})