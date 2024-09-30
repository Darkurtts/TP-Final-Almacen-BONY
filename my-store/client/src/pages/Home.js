import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Bienvenido a la Tienda Almacén</h2>
      <nav>
        <ul>
          <li><Link to="/stock">Gestión de Stock</Link></li>
          <li><Link to="/sales">Registro de Ventas</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
