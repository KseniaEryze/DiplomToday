import React, { useState } from 'react';
import { DOTS, usePagination } from './usePagination';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(100); 
  const [pageSize, setPageSize] = useState(10); 

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    currentPage
  });

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      
      <ul className="pagination">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li key={index} className="pagination-item dots">...</li>;
          }

          return (
            <li
              key={index}
              className={`pagination-item ${
                pageNumber === currentPage ? 'active' : ''
              }`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
   
    </div>
  );
}

export default Pagination;