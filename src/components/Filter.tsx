import React from 'react';
import '../styles/Filter.css';
import filtro from '../img/filtro.png'; 

interface FilterProps {
  setCount: (count: number) => void;
}

const Filter: React.FC<FilterProps> = ({ setCount }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCount(parseInt(event.target.value, 10));
  };

  return (
    <div className="filter">
      <div className="filter-text">
        <img src={filtro} alt="filtro" className="filtro-icon" /> 
        <p>Filter </p>
        <hr className="filter-divider" /> 
        <span>Showing 1–8 of 32 results</span>
      </div>
      <label htmlFor="card-count">Show </label>
      <select id="card-count" onChange={handleChange}>
        <option value="0">0</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
      </select> 
    </div>
  );
};

export default Filter;
