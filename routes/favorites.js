const express = require('express');
const router = express.Router();
const { getItems, postItem, deleteItem } = require('../controllers/favorites');

/**
 * @description Rutas de Favorites, se encarga de manejar las peticiones a la base de datos
*/

router.get('/',getItems);

router.post('/',postItem);

router.delete('/',deleteItem);

module.exports = router;