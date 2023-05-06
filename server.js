const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const PORT = 5000

const APIKEY = process.env.API_KEY

app.use(cors())

app.get("/api/weather/:cityname", (req, res) => {

    const options = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + req.params.cityname + "&appid=" + APIKEY + "&units=imperial",
        headers: {
            'Content-Type': 'application/json',
        },
    }

    axios.request(options)
    .then(response => res.send(response.data), error => console.log(error))
    
})

app.listen(PORT, () => console.log( 'Listening on port:', PORT));