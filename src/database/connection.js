const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async() => {
    // connect to mongodb database
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connection to MongoDB is successful ✅');
    } catch (error) {
        console.log('=== Error ===')
        console.log(error);
        process.exit(1);
    }
};