/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";

import ProductsList from "./Components/productsList";
import { Routes, Route } from "react-router-dom";

import ProductsDetails from "./Components/produsctsDetails";
import AddProducts from "./Components/AddProducts/AddProducts";
import { useState } from "react";

function App() {
  const [productCount, setProductCount] = useState(0);

  return (
    <div className="App">
      <Navbar productCount={productCount} />

      <Routes>
        <Route path="/" element={<ProductsList />} />

        <Route path="/products/:productId" element={<ProductsDetails />} />

        <Route
          path="/add"
          element={<AddProducts setProductCount={setProductCount} />}
        />
      </Routes>
    </div>
  );
}

export default App;
