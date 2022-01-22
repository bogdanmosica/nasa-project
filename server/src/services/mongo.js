const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:9xRtmX77WdH3nM4@nasacluster.suyqp.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (error) => {
    console.error(error);
});

async function loadMongoose() {
    await mongoose.connect(MONGO_URL);
}

module.exports = {
    loadMongoose,
}