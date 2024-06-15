
/**
 * @author Alberth Godoy 
 * @description Configuracion para la conexion a firebase Auth
 * 
 */

const admin = require('firebase-admin');

const connectFirebase = () => {
   
    const credentials= require("../../key/login-cosoproyecto-firebase-adminsdk-t8xrq-6f580a9830.json");
    
    admin.initializeApp({
        credential: admin.credential.cert(credentials)
        
    });
    console.log('Firebase conectado');
};

module.exports = connectFirebase;