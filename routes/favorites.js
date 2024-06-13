const express = require('express');
const router = express.Router();
const { getItems, createItem } = require('../controllers/favorites');

/**
 * @description Rutas de Favorites, se encarga de manejar las peticiones a la base de datos
 */

router.get('/',getItems);

router.post('/',createItem);

module.exports = router;