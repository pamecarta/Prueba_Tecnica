import React from 'react';
import './style.css';

const BrewingMethod = ({ color, icon, name }) => (
  <div className="method" style={{ backgroundColor: color }}>
    <img src={icon} alt={name} />
    <span>{name}</span>
  </div>
);

const q2 = () => {
  const brewingMethods = [
    { color: '#ffd700', icon: 'coffee-maker-icon.png', name: 'Coffee Maker' },
    { color: '#90ee90', icon: 'french-press-icon.png', name: 'French Press' },
    { color: '#ffb6c1', icon: 'pour-over-icon.png', name: 'Pour Over' },
    { color: '#ffa07a', icon: 'aeropress-icon.png', name: 'AeroPress' },
    { color: '#add8e6', icon: 'espresso-icon.png', name: 'Espresso' },
    { color: '#daa520', icon: 'pods-icon.png', name: 'Pods' },
    { color: '#d3d3d3', icon: 'moka-pot-icon.png', name: 'Moka Pot' },
  ];

  return (
    <div className="navbar">
      <header>
        <h2>The Coffee Shop</h2>
        <div className="menu-icon">☰</div>
      </header>
      
      <div className="pagination">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <span key={num} className={num === 1 ? 'active' : ''}>{num}</span>
        ))}
      </div>

      <h1>HOW DO YOU BREW AT HOME?</h1>

      <div className="brewing-methods">
        {brewingMethods.map((method, index) => (
          <BrewingMethod key={index} {...method} />
        ))}
      </div>

      <div className="footer">
        <span>{'< Back'}</span>
        <span>Why it matters +</span>
      </div>
    </div>
  );
};

export default BrewingMethod;