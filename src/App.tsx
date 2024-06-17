import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import CardList from './components/CardList';
import { cardsData } from './components/CardData';
import Banner from './components/Banner';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import IconComponent from './components/IconComponent';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(cardsData.length / count);
  const startIndex = (currentPage - 1) * count;


  return (
    <div className="App">
      <Header />
      <Banner/>
      <Filter setCount={setCount}/>
      <CardList cards={cardsData} count={count} startIndex={startIndex} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <IconComponent/>
      <Footer/>
    </div>
  );
}

export default App;
