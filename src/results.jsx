import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CoffeMaker from './test-assets/q2/coffee-maker-desktop.svg';
import FrenchPress from './test-assets/q2/french-press-desktop.svg';
import PourOver from './test-assets/q2/pour-over-desktop.svg';
import AeroPress from './test-assets/q2/aeropress-desktop.svg';
import Espresso from './test-assets/q2/espresso-desktop.svg';
import Pods from './test-assets/q2/pods-desktop.svg';
import MokaPot from './test-assets/q2/moka-pot-desktop.svg';

function BrewingMethods() {
  const [selectedMethod, setSelectedMethod] = useState(null); 
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const steps = [1, 2, 3, 4, 5, 6];
  const currentStep = 2;
  const brewMethods = [
    { name: 'Coffee Maker', color: '#EEB426', icon: CoffeMaker },
    { name: 'French Press', color: '#9CAF96', icon: FrenchPress },
    { name: 'Pour Over', color: '#D4A1A6', icon: PourOver },
    { name: 'AeroPress', color: '#DA8464', icon: AeroPress },
    { name: 'Espresso', color: '#A9C9E1', icon: Espresso },
    { name: 'Pods', color: '#C47D30', icon: Pods },
    { name: 'Moka Pot', color: '#D2C6C3', icon: MokaPot }
  ];

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
      <div className="content-q2" backgroundColor='#F4EEE5;'>
        <div className="progress-bar">
          {steps.map(step => (
            <div
              key={step}
              className={`progress-circle ${
                step < currentStep ? 'completed' : step === currentStep ? 'active' : 'next'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="transition-content-q2" backgroundColor='#F4EEE5'>
          <p>HOW DO YOU BREW AT HOME?</p>
        </div>
        <div className="curved-container" backgroundColor='#F4EEE5'>
          {brewMethods.map(method => {
            const isSelected = selectedMethod === method.name;
            const isHovered = hoveredMethod === method.name;
            return (
              <div
                key={method.name}
                className={`brew-method ${isSelected ? 'selected' : ''} ${method.name.replace(' ', '-').toLowerCase()}`}
                style={{
                  backgroundColor: isSelected || isHovered ? 'white' : selectedMethod ? '#E9E4DB' : method.color,
                  opacity: selectedMethod && !isSelected ? 0.5 : 1,
                }}
                onClick={() => handleMethodClick(method.name)}
                onMouseEnter={() => setHoveredMethod(method.name)}
                onMouseLeave={() => setHoveredMethod(null)}
              >
                <img src={method.icon} alt={method.name} className="brew-icon" />
                <p>{method.name}</p>
              </div>
            );
          })}
        </div>
        {selectedMethod && (
          <Link 
            to="/Results" 
            className={`button visible`}
          >
            CONTINUE
          </Link>
        )}
        <div className="footer">
          <Link 
            to="/" 
            className="button-back"
          >
            <span className="back-symbol">&lang;</span> Back
          </Link>
          <p>Why it matters?  +</p>
        </div>
      </div>
    </div>
  );
}

export default BrewingMethods;
