require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbconnect = require('./config/mongo');
const app = express();
const movie = require('./utils/searchMovieByID')


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//In the app.js file, import the favorites route and use it in the app.
app.use('/api', require('./routes'));

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});

dbconnect();