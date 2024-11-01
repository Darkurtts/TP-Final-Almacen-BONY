import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Sales from './pages/Sales';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import Footer from './components/Footer';
import './index';




function App() {
  const [totalProducts, setTotalProducts] = React.useState(0);
const [totalSales, setTotalSales] = React.useState(0);
React.useEffect(() => {
  fetch('http://localhost:5000/api/stock')
    .then(res => res.json())
    .then(data => setTotalProducts(data.length));

  fetch('http://localhost:5000/api/sales')
    .then(res => res.json())
    .then(data => setTotalSales(data.length));
}, []);

  return (
    <Router>
      <Navbar/>
      <div className="container bg-secundary">
        <h1 className="mt-4">Almacén BONY</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/products" element={<Products />} />
         
        </Routes>
      </div>
      <Footer totalProducts={totalProducts} totalSales={totalSales} />
    </Router>
  );
}

export default App;
