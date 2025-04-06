export function renderComicsList(comics) {
    const comicsList = document.getElementById('comics-list');
    comicsList.innerHTML = '';
    comics.forEach(comic => {
        const listItem = document.createElement('option');
        listItem.textContent = `Fables #${comic.number}`; 
        listItem.value = comic.pathName;
        comicsList.appendChild(listItem);
    });
}