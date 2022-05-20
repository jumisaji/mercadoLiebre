const path = require('path');
const express = require('express');
const server = express();

server.listen(2020, () => console.log('Abriendo el servidor http://localhost:2020'));

const public = path.resolve(__dirname, '../public');

server.use(express.static(public));

server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views/index.html')))