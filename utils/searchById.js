const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

let data;

async function searchById(id){
    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}`)
        .then(response => {
            //console.log(response.data);
            data = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    return data;
}

module.exports = searchById;