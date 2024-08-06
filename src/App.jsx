import React from 'react';
import CoffeeShop from './CoffeeShop';
import BrewingMethods from './BrewingMethods';
import Results from './Results';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoffeeShop />} />
        <Route path="/brewing-methods" element={<BrewingMethods />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}


export default App;
