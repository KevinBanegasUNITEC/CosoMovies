const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

const nowPlaying = async (page) => {
    let data;
    await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${API_TOKEN}`)
        .then(response => {
            //console.log(response.data);
            data = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    //console.log(data);
    return data;
}

module.exports = nowPlaying;