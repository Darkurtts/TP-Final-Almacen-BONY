import React, { useState, useEffect } from 'react';

function Sales() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({ description: '', amount: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/sales')
      .then(res => res.json())
      .then(data => setSales(data));
  }, []);

  const addSale = () => {
    fetch('http://localhost:5000/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSale),
    })
      .then(res => res.json())
      .then(sale => {
        setSales([...sales, sale]);
        setNewSale({ description: '', amount: 0 });
      });
  };

  const totalSales = sales.reduce((acc, sale) => acc + sale.amount, 0);

  return (
    <div>
      <h2>Registro de Ventas</h2>
      <input 
        type="text" 
        placeholder="Descripción"
        value={newSale.description}
        onChange={(e) => setNewSale({ ...newSale, description: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Monto"
        value={newSale.amount}
        onChange={(e) => setNewSale({ ...newSale, amount: parseFloat(e.target.value) })}
      />
      <button onClick={addSale} className="btn btn-success">Registrar Venta</button>
      
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>{sale.description} - ${sale.amount}</li>
        ))}
      </ul>

      <h3>Ganancia Total: ${totalSales}</h3>
    </div>
  );
}

export default Sales;
