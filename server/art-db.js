const axios = require('axios').default;

module.exports.getRandomArt = () => {
    return axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?q=&hasImages=true")
    .then(resp => resp.data)
    .then(json => json.objectIDs[Math.floor(Math.random() * json.objectIDs.length)])
    .then(objectId => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`))
    .then(resp => resp.data)
    .then(json => ({
        url: json.primaryImageSmall,
        artist: json.artistDisplayName,
        year: json.objectEndDate,
        county: json.country,
        title: json.title,
    }))
}

// https://collectionapi.metmuseum.org/public/collection/v1/search?q=&hasImages=true
// https://collectionapi.metmuseum.org/public/collection/v1/objects/639782