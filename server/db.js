const fs = require('fs');
const path = require('path');

const jokesPath = path.join(__dirname, '/db/jokes.json');
const motivationFilePath = path.join(__dirname, '/db/motivations.json');

// Example: [{text: "", from: ""}]
const motivationFile = JSON.parse(fs.readFileSync(motivationFilePath, "utf-8"));
// [{id: "", name:"", joke:""}]
const jokesFile = JSON.parse(fs.readFileSync(jokesPath, 'utf8'));

const getRandomItem = (items, defaultValue) => {
    if (items.length === 0) {
        return defaultValue;
    }
    return items[Math.floor(Math.random() * items.length)];   
}

module.exports.getRandomMotivationQuote = () => getRandomItem(motivationFile, {text: "Empty motivation", from: "Empty person"});
module.exports.getRandomJoke = () => getRandomItem(jokesFile, {id: "Empty id", name:"Empty name", joke:"Empty joke"});