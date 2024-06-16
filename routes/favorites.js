
const router = require('express').Router();
const { getItems, postItem, deleteItem, addUser} = require('../controllers/favorites');

/**
 * @description Rutas de Favorites, se encarga de manejar las peticiones a la base de datos
*/

router.get('/',getItems);

router.post('/',postItem);

router.delete('/',deleteItem);

router.post('/addUser',addUser);

module.exports = router;