const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');
const course = require('./Data/course.json');

app.get('/', (req, res) => {
    res.send('Learning Hour Server Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/contentDetails/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n.id == id)
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Learning Hour is running on port:', port);
});
