const genres = require('../utils/genres');
const nowPlaying = require('../utils/nowPlaying');
const popular = require('../utils/popular');
const topRated = require('../utils/topRated');
const upcoming = require('../utils/upcoming');

const getGenres = async (req,res) => {
    try {
        const data = await genres();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

const getNowPlaying = async (req,res) => {
    try {
        const datas = await nowPlaying(1);
        const data = await getData(datas.results);
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching now playing:', error);
        res.status(500).send({ error: "Error fetching now playing" });
    }
}

const getPopular = async (req,res) => {
    try {
        const datas = await popular(1);
        const data = await getData(datas.results);
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching popular:', error);
        res.status(500).send({ error: "Error fetching popular" });
    }
}

const getTopRated = async (req,res) => {
    try {
        const datas = await topRated(1);
        const data = await getData(datas.results);
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching top rated:', error);
        res.status(500).send({ error: "Error fetching top rated" });
    }
}

const getUpcoming = async (req,res) => {
    try {
        const datas = await upcoming(1);
        console.log()
        const data = await getData(datas.results);
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching upcoming:', error);
        res.status(500).send({ error: "Error fetching upcoming" });
    }
}

async function getData(datas){
    let tempData = [];
    for (let i = 0; i < datas.length; i++) {
        const movie = datas[i];
        const data = {
            id: movie.id,
            title: movie.title,
            //poster_path: movie.poster_path,
        };
        tempData.push(data);
    }
    return tempData;
}

module.exports = {
    getGenres,
    getNowPlaying,
    getPopular,
    getTopRated,
    getUpcoming
};