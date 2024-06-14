const axios = require('axios');
const searchById = require('./searchById');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas mejor valoradas
 * @param {*} page 
 * @returns 
 */

//url tiene el formato: /gKkl37BQuKTanygYQG1pyYgLVgf.jpg
async function getPoster(id){
    const movie = await searchById(id);
    const url = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+movie.poster_path;
    console.log(url);
    return url;
};

module.exports = getPoster;