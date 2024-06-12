const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

async function genres(){
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_TOKEN}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    return response.data;
}

module.exports = genres;