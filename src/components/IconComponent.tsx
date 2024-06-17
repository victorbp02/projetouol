import React from 'react';
import '../styles/Icon.css';
import trofeu from '../img/trofeu.png';
import validacao from '../img/validacao.png';
import correio from '../img/correio.png';
import suporte from '../img/apoio-suporte.png';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="item">
          <div className="icon">
            <img src={trofeu} alt="icon" />
          </div>
          <div className="text">
            <h2>High Quality</h2>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <img src={validacao} alt="icon" />
          </div>
          <div className="text">
            <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <img src={correio} alt="icon" />
          </div>
          <div className="text">
            <h2>Free Shipping</h2>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <img src={suporte} alt="icon" />
          </div>
          <div className="text">
            <h2>24/7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
