const fs = require('fs').promises

const getAvailableComics = async (path) => {
  
    let list = [];

    try {
        const files = await fs.readdir(path); 
        
        files.forEach((file, index) => {
            const regex = /-(\d+)/g;
            let match
            if (match = regex.exec(file)) list.push({
                pathName: file,
                number: +match[1],
                index,
            }); 
        });
    } catch (err) {
        console.error(err)
    }

    return list
}

module.exports = getAvailableComics