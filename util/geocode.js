const request = require('request');

const geocode = (address, callback) => {
    const mapEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoib2RocCIsImEiOiJjazgzNDEwbGwwNmc1M21vZ2w1N3lqbzZqIn0.FXLYCAbblCg8037MujnQsA`;
    request({url:mapEndpoint, json:true}, (e, res) => {
        e ? callback('Unable to connect to location services', undefined) : null;
        res.body.features.length === 0 ? callback('Unable to find location', undefined) : null;
        res.body.features.length > 0 ? callback(undefined, {
            longitude:res.body.features[0].center[0],
            latitude: res.body.features[0].center[1],
            location: res.body.features[0].place_name
        }) : null
        
    })
}

module.exports = geocode;