const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

async function topRatedMovies(page){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${API_TOKEN}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    return response.data;
};

module.exports = topRatedMovies;