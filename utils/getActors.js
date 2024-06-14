const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas mejor valoradas
 * @param {*} page 
 * @returns 
 */
async function getActors(id){
    let cast = [];
    await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${API_TOKEN}`)
        .then(response => {
            for (let i = 0; i < response.data.cast.length; i++) {
                const actor = {
                    name: response.data.cast[i].name,
                    character: response.data.cast[i].character,
                    profile_path: response.data.cast[i].profile_path
                }
                cast.push(actor);
            } 
        })
        .catch(error => {
            console.error(error);
        });
    console.log(cast);
    return cast;
};

module.exports = getActors;