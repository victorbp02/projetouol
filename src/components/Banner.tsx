import React from 'react';
import '../styles/Banner.css'; // Certifique-se de criar este arquivo de estilo

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>Shop</h1>
        <div className="breadcrumb">
          <p> <span>Home</span> &gt; Shop </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
