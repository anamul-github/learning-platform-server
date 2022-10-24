const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');

app.get('/', (req, res) => {
    res.send('Learning Hour Server Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.listen(port, () => {
    console.log('Learning Hour is running on port:', port);
})