export const fetchStartComic = async (REQUEST_URL) => {
    try {
        const response = await fetch(REQUEST_URL + 'fables');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text(); 
    
       
    } catch (error) {
        console.error('Ошибка:', error);
    }
}