const { favoritesModel } = require('../models')
const searchMovie = require('../utils/searchMovie')

/**
 * @description Controlador de Favorites
 */

/**
 * @description Traer Favorites
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) => {
    const data = await favoritesModel.findOne({user : req.body.user});
    
    res.status(200).send(data.favorites);
};

/**
 * @description Agregar un item a Favorites
 * @param {*} req
 * @param {*} res
 */
const postItem = (req,res) => {};

/**
 * @description Eliminar un item de Favorites
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req,res) => {};

/**
 * @description Actualizar un item de Favorites
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req,res) => {};

/**
 * @description Crear un item en Favorites
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req,res) => {
    const {body} = req;
    console.log(body);
    const data = await favoritesModel.create(body);
    res.send(data);
};



module.exports = {getItems, postItem, deleteItem, updateItem, createItem};
