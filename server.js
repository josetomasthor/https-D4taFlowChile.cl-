const express = require('express');
const app = express();
const path = require('path');

// Usa la carpeta Public como pública
app.use(express.static(path.join(__dirname, 'Public')));

// Puerto del servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
