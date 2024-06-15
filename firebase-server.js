const express = require('express');
const app = express();
const connectFirebase = require('./config/firebase');
const admin = require('firebase-admin');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/registrarse', async (req, res) => {
    const {email, password} = req.body;
    console.log(`mostrar body ${req.body}`);
    try {
        await admin.auth().createUser({
            email,
            password,
            emailVerified: false,
            disabled: false
        });
        res.status(201).json({
            message: 'Usuario creado'
        });z
    } catch (error) {
        res.status(400).json({
            message: 'Error al crear el usuario',
            error
        });
    }
});



const PORT =  process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`firebase server is running on port ${PORT}`);
});

connectFirebase();