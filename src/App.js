import React from "react";
import "assets/scss/style.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import Checkout from "pages/Checkout";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
