const express = require('express');
const app = express();

app.use(express.json());

// Nuestro pizarrón blanco (lista de reportes en memoria)
let reportes = [];

// Ruta GET: Sirve para VER la lista de reportes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Sirve para AGREGAR un reporte a la lista
app.post('/reportes', (req, res) => {
  // Creamos un nuevo reporte con un ID automático
  const reporte = {
    id: reportes.length + 1, // Si hay 0 reportes, el ID será 1. Si hay 1, será 2, etc.
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Metemos el reporte en nuestra lista
  reportes.push(reporte);

  // Respondemos confirmando que lo guardamos
  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
