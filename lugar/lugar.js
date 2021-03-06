const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate="${encodedUrl}"&auth=270304373376186438590x127524&json=1`

        //headers: {'X-Custom-Header': 'foobar'}
    });

    const resp = await instance.get();
    if (resp.data.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data;
    const direccion = data.standard.countryname;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}