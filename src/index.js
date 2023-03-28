const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`App running on https://localhost:${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer().then(() => {
    console.log('Server is running');
});