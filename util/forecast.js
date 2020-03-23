const request = require('request');

const forecast =   (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1d67ceb0ef3226c2b9f0f7630b90794a/${latitude},%20${longitude}`
    request({url:url, json:true}, (e, res) => {
        e ? callback('Unable to connect to weather services', undefined) : null;
        res.body === undefined ? callback('Unable to find location', undefined) : null;
        res.body ? callback(undefined, {
            message: `${res.body.daily.summary} It is currently ${res.body.currently.temperature} degrees, with ${res.body.currently.precipProbability}% chance of rain.`
        }) : null
        
    })
    
}

module.exports = forecast
