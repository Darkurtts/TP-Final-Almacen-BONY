const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let stock = [];
let sales = [];

// Obtener productos del stock
app.get('/api/stock', (req, res) => {
  res.json(stock);
});

// Añadir un nuevo producto al stock
app.post('/api/stock', (req, res) => {
  const newProduct = req.body;
  stock.push(newProduct);
  res.status(201).json(newProduct);
});

// Obtener ventas
app.get('/api/sales', (req, res) => {
  res.json(sales);
});

// Registrar una nueva venta
app.post('/api/sales', (req, res) => {
  const newSale = req.body;
  sales.push(newSale);
  res.status(201).json(newSale);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
