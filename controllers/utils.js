const genres = require('../utils/genres');
const nowPlaying = require('../utils/nowPlaying');
const popular = require('../utils/popular');
const topRated = require('../utils/topRated');
const upcoming = require('../utils/upcoming');
const search = require('../utils/searchMovie');
const searchID = require('../utils/searchById');
const { favoritesModel } = require('../models');
const getactors = require('../utils/getActors');

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
            poster_path: movie.poster_path,
        };
        tempData.push(data);
    }
    return tempData;
}

const getSearchMovie = async (req,res) => {
    const nameMovie = req.params.query;
    if(!nameMovie)
        return res.status(400).send({ error: "Invalid data" });
    try{
        const movies = await search(nameMovie,1);
        let data = [];
        for(let i = 0; i < movies.length; i++){
            const movie = await searchID(movies[i].id);
            const datamovie = {
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                poster_path: movie.poster_path,
                runtime: movie.runtime,
                genres: movie.genres
            };
            data.push(datamovie);
        }
        res.status(200).send(data);    
    }catch(error){
        console.error('Error fetching search movie:', error);
        res.status(500).send({ error: "Error fetching search movie" });
    }
}

const getSearchMovieByID = async (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: "Invalid data" });
    if(!req.body.user)
        return res.status(401).send({ error: "Unauthorized" });
    const id = Number(req.params.id);
    const user = req.body.user;
    try {
        const movie = await searchID(id);
        if (!movie)
            return res.status(404).send({ error: "Movie not found" });
        const favorite = await favoritesModel.findOne({ user: user, favorites: id });
        favorite ? movie.favorite = true : movie.favorite = false;
        const actors = await getactors(movie.id);
        const data = {
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            runtime: movie.runtime,
            overview: movie.overview,
            genres: movie.genres,
            country: movie.origin_country,
            score: Math.floor(movie.vote_average * 10),
            favorite: movie.favorite,
            actors: actors
        };
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching search movie by id:', error);
        res.status(500).send({ error: "Error fetching search movie by id" });
    }
}

module.exports = {
    getGenres,
    getNowPlaying,
    getPopular,
    getTopRated,
    getUpcoming,
    getSearchMovie,
    getSearchMovieByID
};