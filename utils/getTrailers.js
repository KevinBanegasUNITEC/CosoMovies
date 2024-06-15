const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

/**
 * @description Trae las peliculas mejor valoradas
 * @param {*} page 
 * @returns 
 */
async function findTrailers(movieId) {
    let data;
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_TOKEN}&append_to_response=videos`)
        .then(response => {
            const trailers = response.data.videos.results;
            if (trailers && trailers.length > 0) {
                const trailer = trailers.find(trailer => trailer.name.toLowerCase().includes("trailer"));
                if (trailer) {
                    data = `https://www.youtube.com/watch?v=${trailer.key}`;
                } else {
                    data = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // ;)
                }
            } else {
                data = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // ;)
            }
        })
        .catch(error => {
            console.error(error);
        });
    return data;
};

module.exports = findTrailers;