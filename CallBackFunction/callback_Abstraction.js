const request = require('request')
const getData = (address, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=6df8c0900ff34ab8b7014248241004&q=${encodeURIComponent(address)}&aqi=no`;
    request({ url: url }, (error, response) => {
        const data = JSON.parse(response.body)
        if (error) {
            callback("Unable to connect to weather Service!!", undefined)
        } else if (data.location == {}) {
            callback("unable to find the location", undefined);
        } else {
            callback(undefined, {
                temp_c: data.current.temp_c, 
                temp_f: data.current.temp_f, 
                long: data.location.lon, 
                lat: data.location.lat
            });
        }
    })
}
getData("New York", (error, data) => {
    console.log("error",error)
    console.log("data",data)
})
