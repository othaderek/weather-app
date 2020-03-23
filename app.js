const geocode = require('./util/geocode.js')
const forecast = require('./util/forecast.js')

geocode('Portland', (e, data) => {
    forecast(data.latitude, data.longitude, (e, data) => {
        console.log(data["message"]);
    })
})