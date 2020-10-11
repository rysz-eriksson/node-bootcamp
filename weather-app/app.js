const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const search = process.argv[2]

geocode(search, (error, data) => {
    if (!search) {
        return console.log('Please provide a location for search')
    }
    if (error) {
        return console.log(error)
    } 

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log('Data: ', forecastData)
    })
})

