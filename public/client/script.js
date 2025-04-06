import { fetchConfig } from './request/fetchConfig.js'
import { fetchComicsPage } from './request/fetchComicsPage.js'
import {fetchStartComic} from './request/fetchStartComic.js'
import { renderComicsList } from './renders/renderComicsList.js'

const REQUEST_URL = 'http://localhost:3000/';

const selectComics = document.getElementById('comics-list');

selectComics.addEventListener('change', function() {
    
    // fetchComicsPage(REQUEST_URL, this.value, current_page)

    // fetchStartComic(REQUEST_URL)
});

new Promise((res, rej) => {
    res(fetchConfig(REQUEST_URL))
}).then((res) => {
    if (!res.length) return rej(res)
    renderComicsList(res)
}).catch((err) => console.error(err))


