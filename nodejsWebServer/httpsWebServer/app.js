const https = require("https");
const url = `https://api.weatherapi.com/v1/current.json?key=6df8c0900ff34ab8b7014248241004&q=Noida&aqi=no`;

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log("error", error);
})
request.end();