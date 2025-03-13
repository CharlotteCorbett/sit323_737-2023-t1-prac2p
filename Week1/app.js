
// Requiring express, which runs as our server.
const express = require('express');

// Requiring path which finds the path to our index.html file.
const path = require('path');

// Initiates our app and calls express.
const app = express();

// Initiates our port constant, which can be changed here
const port = 3000;

// Sends request using the path module which finds and gets our 
// static index.html file then sends it to express.
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './index.html'));
});

// Tells express to listen on our port variable then output a log to
// the console/terminal saying what port it's listening to.
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

