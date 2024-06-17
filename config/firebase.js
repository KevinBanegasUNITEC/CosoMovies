const { initializeApp } = require("firebase/app");
require('dotenv').config();

const connectFirebase = () => {
    try {
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,
            measurementId: process.env.MEASUREMENT_ID
          };
    
         const app = initializeApp(firebaseConfig);
            console.log("Connected to Firebase");

    } catch (error) {
        console.error("Error connecting to Firebase");
        console.error(error.message);
        process.exit(1);
    }

    
}


module.exports = connectFirebase;

