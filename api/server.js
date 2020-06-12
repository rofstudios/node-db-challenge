let express = require('express');
let helmet = require('helmet');

let server = express(); //creates server using express

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: "UP"})
})

module.exports = server;