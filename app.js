require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dbconnect = require('./config/mongo');
const topRated = require('./utils/topRated'); //works
const upcoming = require('./utils/upcoming'); //works
const nowPlaying = require('./utils/nowPlaying'); //works
const genres = require('./utils/genres'); //works
const popular = require('./utils/popular'); //works
const search = require('./utils/searchMovie'); //works
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//In the app.js file, import the favorites route and use it in the app.
app.use('/api', require('./routes'));

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});

dbconnect();