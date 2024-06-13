const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas populares
 * @param {*} page 
 * @returns 
 */
async function popularMovies (page) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${API_TOKEN}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    return response.data;
}

module.exports = popularMovies;