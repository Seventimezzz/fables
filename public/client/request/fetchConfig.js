
export const fetchConfig = async (REQUEST_URL) => {
    try {
        const response = await fetch(REQUEST_URL + 'comics');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.comicsCount
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

