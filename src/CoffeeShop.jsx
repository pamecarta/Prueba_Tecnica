import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import baristaImage from './test-assets/barista-transition/pretty-much-a-barista-desktop.svg';

function CoffeeShop() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#9CAF96', minHeight: '100vh' }}>
      <nav>
        <div className="navbar">
          <h1 className="title">The Coffee Shop</h1>
          <div className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
      <div className="content">
        <img
          src={baristaImage}
          alt="Barista"
          className="barista_icon"
        />
        <div className="transition-content">
          <p>We'll find coffee that's on your level.</p>
          <Link 
            to="/brewing-methods" 
            className={`button ${isButtonVisible ? 'visible' : ''}`}
          >
            NEXT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop;