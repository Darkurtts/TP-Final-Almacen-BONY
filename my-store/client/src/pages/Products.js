import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', quantity: 0, price: 0 });

  useEffect(() => {
    // Obtener productos del backend
    fetch('http://localhost:5000/api/stock')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Añadir un nuevo producto
  const addProduct = () => {
    fetch('http://localhost:5000/api/stock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(product => {
        setProducts([...products, product]);
        setNewProduct({ name: '', quantity: 0, price: 0 });
      });
  };

  return (
    <div>
      <h2>Productos Disponibles</h2>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Agregar Nuevo Producto</h3>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="form-control mb-2"
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
          className="form-control mb-2"
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          className="form-control mb-2"
        />
        <button onClick={addProduct} className="btn btn-primary">Añadir Producto</button>
      </div>
    </div>
  );
}

export default Products;
