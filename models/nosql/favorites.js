const mongoose = require('mongoose');

/**
 * @description Schema de Favorites en la base de datos
 */
const favoritesSchema = new mongoose.Schema(
    {
        idMovie: { type: Number, required: true },
        userId: { type: Number, required: true },
    },
    { 
        versionKey: false 
    }
);

module.exports = mongoose.model('favorites', favoritesSchema);