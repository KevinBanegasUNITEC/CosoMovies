const express = require('express');
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

/**
 * @description Quita la extensión de un archivo
 * @param {*} fileName 
 * @returns 
 */
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

/**
 * @description Lee los archivos de la carpeta routes y los importa
 */
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`));
    }
});

module.exports = router;