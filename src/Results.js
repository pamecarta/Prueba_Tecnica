import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import GuatemalaCoffee from './test-assets/results/product.svg';
import TestingNotes from './test-assets/results/mouth.svg';
import RoastLevel from './test-assets/results/roast.svg';
import SippingStyle from './test-assets/results/sipping.png';
import BrewMethod from './test-assets/results/brew.svg';

function Results() {
  const [selectedMethod, setSelectedMethod] = useState(null); 
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const steps = [1, 2, 3, 4, 5, 6];
  const currentStep = 2;

  const handleMethodClick = (methodName) => {
    setSelectedMethod(prevSelected => prevSelected === methodName ? null : methodName);
  };

  return (
    <div>
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
      <div className="content-r" backgroundColor='#F4EEE5;'>
        <div className="progress-bar-r">
          {steps.map(step => (
            <div
              key={step}
              className={`progress-circle-r ${
                step < currentStep ? 'completed' : step === currentStep ? 'active' : 'next'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="transition-content-r" backgroundColor='#F4EEE5'>
          <h1>MEET YOUR NEW FAVORITE COFFEE.</h1>
          <p>Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.</p>
          <div className="buttons-container">
            <Link to='' className="email-me">Email my results</Link>
            <Link to='/' className="retake-quiz">Retake the quiz</Link>
          </div>
        </div>
        <div className="best-match">
            <div className="best-match-left">
              <h2>BEST MATCH</h2>
              <img src={GuatemalaCoffee} alt="Guatemala Coffee" className="coffee-image" />
              <h3>GUATEMALA COFFEE</h3>
              <p className="coffee-price">$20.50</p>
            </div>
            <div className="best-match-right">
              <h1 className="why-love-it">WHY YOU'LL LOVE IT</h1>
              <p className="love-it-description">IF YOU'VE EVER TAKEN A BITE FROM A RIPE RED APPLE, YOU'LL KNOW THE WAY THIS COFFEE TASTES.</p>
              <div className="tasting-notes">
                <div className="note">
                  <h4>TASTING NOTES</h4>
                  <img src={TestingNotes} alt="Tasting Notes" className="mouth-image" />
                  <p>Red Apple, Lemongrass, Malt Chocolate</p>
                </div>
                <div className="note">
                  <h4>ROAST LEVEL</h4>
                  <img src={RoastLevel} alt="Roast Level" className="roast-image" />
                  <p>Medium</p>
                </div>
                <div className="note">
                  <h4>SIPPING STYLE</h4>
                  <img src={SippingStyle} alt="Sipping Style" className="sipping-image" />
                  <p>Great with milk/cream</p>
                </div>
                <div className="note">
                  <h4>BREW METHOD</h4>
                  <img src={BrewMethod} alt="Brew Method" className="brew-image" />
                  <p>Brews a delicious cup with a pour over</p>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <p>Why it matters?  +</p>
            <Link 
            to="/brewing-methods" 
            className="button-back"
          >
            <span className="back-symbol">&lang;</span> Back
          </Link>
        </footer>
        </div>
    </div>
  );
}

export default Results;
