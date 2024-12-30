const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const port = 3100;

const app = express();

// Serve Angular static files
app.use(express.static(path.join(__dirname, '../docs/')));
app.use(cors());
app.use(bodyParser.json());

console.log('Starting node.js server');
console.log(__dirname)

app.get('/test', (req, res) => {
    res.sendFile(filePath);
});

// Catch-all route to serve Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/docs/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});