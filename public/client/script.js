import { fetchConfig } from './request/fetchConfig.js'
import { fetchComicsPage } from './request/fetchComicsPage.js'
import { renderComicsList } from './renders/renderComicsList.js'

const REQUEST_URL = 'http://localhost:3000/';

const selectComics = document.getElementById('comics-list');

selectComics.addEventListener('change', function() {
    window.location.href = 'comicsPage';
});

new Promise((res, rej) => {
    res(fetchConfig(REQUEST_URL))
}).then((res) => {
    if (!res.length) return rej(res)
    renderComicsList(res)
}).catch((err) => console.error(err))


