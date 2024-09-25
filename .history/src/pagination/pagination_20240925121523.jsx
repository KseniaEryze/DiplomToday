// import React from 'react';
// import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
// import './pagination.scss';
// const Pagination = props => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <ul
//       className={classnames('pagination-container', { [className]: className })}
//     >
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange.map(pageNumber => {
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }

//         return (
//           <li
//             className={classnames('pagination-item', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;

import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
import React,{ useState } from 'react';
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
  const DOTS = '...';
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