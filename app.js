const geocode = require('./util/geocode.js')
const forecast = require('./util/forecast.js')

geocode('Portland', (e, data) => {
    e ? console.log(e): null;
    let {latitude, longitude} = data;
    forecast(latitude, longitude, (e, data) => {
        console.log(data["message"]);
    })
})