const mongoose = require('mongoose');

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