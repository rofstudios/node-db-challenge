let express = require('express');
let helmet = require('helmet');

let projectRoutes = require('../routes/projects/projectRoutes');
let resourceRoutes = require('../routes/resources/resourceRoutes');

let server = express(); //creates server using express

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRoutes);
server.use('/api/resources', resourceRoutes);

server.get('/', (req, res) => {
    res.status(200).json({ api: "UP"})
})

module.exports = server;