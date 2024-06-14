const mongoose = require('mongoose');
require('dotenv').config();

/**
 * @description Conecta a la base de datos
 */

const dbConnection = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI).catch((error) => {
        console.log('Error connecting to the database');
        console.log(error);
    });
    if (mongoose.connection.readyState === 2) {
        console.log('Connected to the database');
    }
};

module.exports = dbConnection;