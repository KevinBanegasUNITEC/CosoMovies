const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

const nowPlaying = (page) => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${API_TOKEN}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = nowPlaying;