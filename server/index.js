const { createServer } = require('http');
require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');

const express = require('./config/express.js');
// const connectDB = require('./database/conn.js');

const PORT = process.env.SERVER_PORT;

const app = express();
const httpServer = createServer(app);

httpServer.listen(PORT, () =>
    console.log(`Server now running on port ${PORT}!`)
);

// connectDB();
// const connection = mongoose.connection;

// connection.once('open', () => {
//     initialFetch();
//     console.log('MongoDB database connected');
// });

// connection.on('error', (error) => console.log('Error: ' + error));