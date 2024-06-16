const admin = require('firebase-admin');
const axios = require('axios');
/**
 * @description Login controlador
 */

const addUser = async (req,res) => {
    const {email} = req.body;
    try {
        
        const userRecord = await admin.auth().getUserByEmail(email);
        //envia el uid a la base de datos
        axios.post("https://api.cosomovies.xyz/api/favorites/addUser", {
            user: userRecord.uid,
            favorites: []
        });

        res.status(201).json({
            message: 'user addded successfully',
        });
    } catch (error) {
        res.status(400).json({
            message: 'error at adding user',
            error
        });
        console.log(error);
    }
}

module.exports = {
    addUser
}