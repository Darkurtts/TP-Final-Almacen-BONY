import React, { useState, useEffect } from 'react';

function Stock() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', quantity: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/stock')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    fetch('http://localhost:5000/api/stock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(product => {
        setProducts([...products, product]);
        setNewProduct({ name: '', quantity: 0 });
      });
  };

  return (
    <div>
      <h2>Gestión de Stock</h2>
      <input 
        type="text" 
        placeholder="Nombre del producto"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Cantidad"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
      />
      <button onClick={addProduct} className="btn btn-primary">Añadir Producto</button>
      
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stock;
