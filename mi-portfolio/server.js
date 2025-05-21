const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression()); // Habilita Gzip
app.use(express.static('mi-portfolio')); // Sirve tus archivos

app.listen(3000, () => console.log('Servidor con compresión en http://localhost:3000'));