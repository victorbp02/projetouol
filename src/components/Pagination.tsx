import React from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map(page => ( 
        <button
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button className="page-item" onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;