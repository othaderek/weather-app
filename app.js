const request = require('request');
const url = 'https://api.darksky.net/forecast/1d67ceb0ef3226c2b9f0f7630b90794a/40.635810,%20-73.945136';

request({ url: url}, async (e, res) => {
    const data = await JSON.parse(res.body)
    forecast(data);
})

const forecast = (data) => {
    console.log(`${data.daily.summary} It is currently ${data.currently.temperature} degrees, with ${data.currently.precipProbability}% chance of rain.`);
}
