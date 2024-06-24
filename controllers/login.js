const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut} = require("firebase/auth");
const axios = require('axios');

/**
 * @description Sign up a user
 */

const signUp = async (req, res) => {
    try {
        const auth = getAuth();
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("Email and password are required");
        }
        const user = await createUserWithEmailAndPassword(auth, email, password);
        //Mandar el UID a la base de datos
        const favorites = [];
        await axios.post('https://api.cosomovies.xyz/api/favorites/addUser', {
            user: email,
            favorites
        });
        res.status(200).json("User created: " + email);
    } catch (error) {
        res.status(400).json("Error: " + error.messag);
        console.error(error);
    }
}

const signIn = async (req, res) => {
    try {
        const auth = getAuth();
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("Email and password are required");
        }
        const user = await signInWithEmailAndPassword(auth, email, password);
        res.status(200).json("User signed in: " + email);
    } catch (error) {
        res.status(400).json("Error: " + error.message);
        console.error(error);
    }
}

const signOutUser = async (req, res) => {
    try {
        const auth = getAuth();
        const user = getAuth().currentUser;
        await signOut(auth);
        res.status(200).json("User signed out: " + user.email);
    } catch (error) {
        res.status(400).json("Error: " + error.message);
        console.error(error);
    }
}

module.exports = {
    signUp, signIn, signOutUser
}