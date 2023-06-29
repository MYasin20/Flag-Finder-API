/* eslint-disable react/prop-types */
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import '../../../public/styles/pagination.scss';

const Pagination = ({ totalCount, currentPage, pageSize, onPageChange, siblingCount, className, setDarkMode }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li key={'left-nav-arrow'}
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={`${setDarkMode ? 'arrow-light' : 'arrow-dark'} left`} />
      </li>
      {paginationRange.map((pageNumber, idx) => {

        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={idx} className={`pagination-item dots ${setDarkMode ? 'text-white' : ''}`}>&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li key={idx}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage && !setDarkMode,
              'bg-[#0000000a]': pageNumber === currentPage && !setDarkMode,
              'bg-[#495b68]': pageNumber === currentPage && setDarkMode,
              'hover:bg-[#5d6d7a]': pageNumber === currentPage && setDarkMode,
              'text-white': setDarkMode

            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li key={'right-nav-arrow'}
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={`${setDarkMode ? 'arrow-light' : 'arrow-dark'} right`} />
      </li>
    </ul>
  )
}

export default Pagination