const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bb059a7468041837e530623d63b96a35`)

    return resp.data.main.temp;
    //return console.log((`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bb059a7468041837e530623d63b96a35`));
}


module.exports = {
    getClima
}