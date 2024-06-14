const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas mejor valoradas
 * @param {*} page 
 * @returns 
 */
async function getActors(id){
    let actors = [];
    let plays = [];
    await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${API_TOKEN}`)
        .then(response => {
            let cast = response.data.cast;
            for (let i = 0; i < cast.length; i++) {
                actors.push(cast[i].name);
                plays.push(cast[i].character);
            } 
        })
        .catch(error => {
            console.error(error);
        });
    console.log(actors,plays);
    return {actors,plays};
};

module.exports = getActors;