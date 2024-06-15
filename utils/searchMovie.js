const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Busca una pelicula por su nombre
 * @param {*} query 
 * @param {*} page 
 * @returns 
 */
async function searchMovie (query, page){
    let data;
    await axios.get(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=${page}&api_key=${API_TOKEN}`)
        .then(response => {
            //console.log(response.data);
            data = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    return data.results;
}

module.exports = searchMovie;