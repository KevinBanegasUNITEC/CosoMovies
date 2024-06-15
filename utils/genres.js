const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;


/**
 * @description Trae los generos de las peliculas
 * @returns 
 */
async function genres(){
    let data;
    await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_TOKEN}`)
        .then(response => {
            //console.log(response.data);
            data = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    return data;
}

module.exports = genres;