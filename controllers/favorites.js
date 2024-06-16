const { favoritesModel } = require('../models')
const searchById = require('../utils/searchById');

/**
 * @description Controlador de Favorites
 */

/**
 * @description Traer Favorites
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) => {
    try {
        if(!req.body.user)
            return res.status(400).send({ error: "User is required" });
        
        const data = await favoritesModel.findOne({ user: req.body.user });
        if (!data) {
            return res.status(404).send({ error: "Favorites not found" });
        }

        const moviesID = data.favorites;
        const movies = [];

        for (let i = 0; i < moviesID.length; i++) {
            try {
                const movie = await searchById(moviesID[i]);
                const datamovie = {
                    id: movie.id,
                    title: movie.title,
                    release_date: movie.release_date,
                    poster_path: movie.poster_path,
                    runtime: movie.runtime,
                    genres: movie.genres
                };
                movies.push(datamovie);
            } catch (error) {
                // Log the error and continue with the next movie ID
                console.error(`Error fetching movie with ID ${moviesID[i]}:`, error);
            }
        }
        res.status(200).send(movies);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

/**
 * @description Agregar un item a Favorites
 * @param {*} req
 * @param {*} res
 */
const postItem = async (req,res) => {
    if (!req.body.user || !req.body.id) {
        return res.status(400).send({ error: "ID and user are required" });
    }
    const id = Number(req.body.id);
    const user = req.body.user;
    await favoritesModel.findOneAndUpdate(
        { user: user },
        { $addToSet: { favorites: id } },
        { new: true, upsert: true } 
    ).then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            console.error('Error adding movie to favorites:', error);
            res.status(500).send({ error: "Error adding movie to favorites" });
        });
};

/**
 * @description Eliminar un item de Favorites
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req,res) => {
    if (!req.body.user || !req.body.id) {
        return res.status(400).send({ error: "ID and user are required" });
    }
    const id = Number(req.body.id);
    const user = req.body.user;
    favoritesModel.findOneAndUpdate(
        { user: user },
        { $pull: { favorites: id } },  
        { new: true }
    )
        .then(data => {
            if (!data) {
                return res.status(404).send({ error: "User not found" });
            }
            res.status(200).send(data);
        })
        .catch(error => {
            console.error('Error removing movie from favorites:', error);
            res.status(500).send({ error: "Error removing movie from favorites" });
        });
};

/**
 * @description Actualizar un item de Favorites
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req,res) => {};

/**
 * @description agrega un usuario
 * @param {*} req 
 * @param {*} res 
 */

const addUser = (req,res) => {
    if (!req.body.user) {
        return res.status(400).send({ error: "User is required" });
    }
    if(!Array.isArray(req.body.favorites)){
        return res.status(400).send({ error: "Favorites is required" });
    }
    const user = req.body.user;
    const favorites = req.body.favorites;
    //agregar un usuario a la base de datos
    const newUser = new favoritesModel({ user, favorites });
    newUser.save()
        .then(data => {
            res.status(201).send(`User ${user} added successfully`);
        })
        .catch(error => {
            console.error('Error adding user:', error);
            res.status(500).send({ error: "Error adding user" });
        });
};

module.exports = {getItems, postItem, deleteItem, updateItem, addUser};
