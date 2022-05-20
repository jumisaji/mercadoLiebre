const path = require('path');
const express = require('express');
const server = express();

server.listen(2020, () => console.log('Abriendo el servidor http://localhost:2020'));

const views = path.resolve(__dirname, '../views');

server.use(express.static(views));

server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')))
server.get('/', (req,res) => res.send('Bienvenid@ a Mercado Liebre'));