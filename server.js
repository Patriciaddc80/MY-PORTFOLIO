const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde el directorio mi-portfolio
app.use(express.static(path.join(__dirname, 'mi-portfolio')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mi-portfolio', 'index.html'));
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'mi-portfolio', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 