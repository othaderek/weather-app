const request = require('request');
const url = 'https://api.darksky.net/forecast/1d67ceb0ef3226c2b9f0f7630b90794a/40.635810,%20-73.945136';
const mapKey = 'pk.eyJ1Ijoib2RocCIsImEiOiJjazgzNDEwbGwwNmc1M21vZ2w1N3lqbzZqIn0.FXLYCAbblCg8037MujnQsA';
const mapEndpoint = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib2RocCIsImEiOiJjazgzNDEwbGwwNmc1M21vZ2w1N3lqbzZqIn0.FXLYCAbblCg8037MujnQsA'

// request({ url: url}, async (e, res) => {
//     const data = await JSON.parse(res.body)
//     forecast(data);
// })
request({ url: mapEndpoint}, async (e, res) => {
    const data = await JSON.parse(res.body)
    let latitude = data.features[0].center[1]
    let longitude = data.features[0].center[0]

    console.log(latitude, longitude);
    
})

const forecast = (data) => {
    console.log(`${data.daily.summary} It is currently ${data.currently.temperature} degrees, with ${data.currently.precipProbability}% chance of rain.`);
}
