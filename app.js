const express = require("express");
const path = require('path');
const getAvailableComics  = require('./utils')
 
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
 
app.get('/:comic/:page', (req, res) => {
    const page = req.params.page;
    const comic = req.params.comic;

    const imagePath = path.join(__dirname, 'public', comic, page + '.jpg');

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});



app.get('/comics', async (_, res) => {
    const path = __dirname + '/public'

    const comicsCount = await getAvailableComics(path)

    if (!comicsCount) {
        res.status(500)
        res.json({message: 'Не получилось получить доступ к комиксавм'})
    }

    res.json({comicsCount})
})

 
app.listen(3000);