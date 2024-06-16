const express = require('express');
const axios = require('axios');
const app = express();
const connectFirebase = require('./config/firebase');
const admin = require('firebase-admin');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
    const {email} = req.body;
    console.log(`mostrar body ${req.body}`);
    try {
        
        const userRecord = await admin.auth().getUserByEmail(email);
        
        //envia el uid a la base de datos
        axios.post("http://localhost:3000/api/favorites/addUser", {
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
    }
});

app.get('/login', async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: 'Email y password son requeridos'
        });
    }
    try {
        const user = await admin.auth().getUserByEmail(email);
        await admin.auth().createCustomToken
        console.log(user.email, user.password);
        if (user.password !== password) {
            res.status(400).json({
                message: 'Password incorrecto'
            });
        }
        if (user.email !== email) {
            res.status(400).json({
                message: 'Email incorrecto'
            });
        }
        res.status(200).json({
            message: 'Usuario logeado',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al logear el usuario',
            error
        });
    }
});


const PORT =  process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`firebase server is running on port ${PORT}`);
});

connectFirebase();