const http = require('http');

const app = require('./src/app');

//cargamos el fichero de entorno
require('dotenv').config();

//Base de datos
require('./src/config/db');

//Server
const server = http.createServer(app);


//Puerto por donde va a escuchar
const PORT = process.env.PORT ?? 3000;
//pongo a escuhar el server
server.listen(PORT);


//Para capturar el evento del listeneer y del error
server.on('listening', () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})

server.on('onerror', (error) => {
    console.log(error)
})
