const express = require("express");
const path = require('path');
const getAvailableComics  = require('./src/utils')
 
const app = express();

app.set("view engine", "pug");

app.set('views', path.join(__dirname, 'public', 'client', 'pages')); // Укажите путь к папке с шаблонами

const pathTofFables = path.join(__dirname, 'public', 'fables')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/page/:comic/:page', (req, res) => {
    const page = req.params.page;
    const comic = req.params.comic;

    const imagePath = path.join(pathTofFables, comic, page + '.jpg');
    
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

app.get('/comics', async (_, res) => {
    const comicsCount = await getAvailableComics(pathTofFables)

    if (!comicsCount) {
        res.status(500)
        res.json({message: 'Не получилось получить доступ к комиксавм'})
    }

    res.json({comicsCount})
})


app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'client', 'index.html'));
})

app.get('/read/:comics', (req, res) => {
    const comics = req.params.comics

    res.render("read", {
        comics,
    });
})
 
app.listen(3000);