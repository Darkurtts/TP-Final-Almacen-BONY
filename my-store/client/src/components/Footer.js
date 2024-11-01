import React from 'react';

function Footer({ totalProducts, totalSales }) {
  const handleAlert = () => {
    alert('Creado por: Orlando Sean\nCorreo: orlandoseanluca@gmail.com\nTeléfono: 223-568-8283');
  };

  return (
    <footer className="bg-light text-center py-3">
      <div>
     
        <p>Total de Ventas Registradas: {totalSales}</p>
        <button onClick={handleAlert} className="btn btn-info mt-2">
          Información del Creador
        </button>
      </div>
    </footer>
  );
}

export default Footer;
