const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas mejor valoradas
 * @param {*} page 
 * @returns 
 */
async function getMoviesByGenre(genreId){
    let data;
    await axios.get(`https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${API_TOKEN}&with_genres=${genreId}&page=1`)
        .then(response => {
            //console.log(response.data);
            data = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    return data;
};

module.exports = getMoviesByGenre;