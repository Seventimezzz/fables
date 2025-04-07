
function formatWithMask(number) {
    let numberString = number.toString();

    while (numberString.length < 5) {
        numberString = '0' + numberString;
    }

    return 'P' + numberString;
}

export async function fetchComicsPage(REQUEST_URL, value, current_page) {
    try {
        const response = await fetch(REQUEST_URL + '/page' + value + '/' + formatWithMask(current_page));
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
