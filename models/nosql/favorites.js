const mongoose = require('mongoose');

/**
 * @description Schema de Favorites en la base de datos
 */
const favoritesSchema = new mongoose.Schema(
    {
        favorites: { type: Array, required: true },
    },
    { 
        versionKey: false 
    }
);

module.exports = mongoose.model('favorites', favoritesSchema);