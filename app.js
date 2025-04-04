const express = require("express");
const path = require('path');
 
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
 
app.get('/public/:comic/:page', (req, res) => {
    const page = req.params.page;
    const comic = req.params.comic;

    const imagePath = path.join(__dirname, 'public', comic, page + '.jpg');

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

 
app.listen(3000);