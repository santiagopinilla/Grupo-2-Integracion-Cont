const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Saludos desde la API');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:`);
});
