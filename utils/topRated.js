const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas mejor valoradas
 * @param {*} page 
 * @returns 
 */
async function topRatedMovies(page){
    let data;
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${API_TOKEN}`)
        .then(response => {
            //console.log(response.data);
            data = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    return data;
};

module.exports = topRatedMovies;