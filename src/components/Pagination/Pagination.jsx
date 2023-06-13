import classnames from 'classnames';
import { usePagination, DOTS } from '../../usePagination'
import './pagination.scss'

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalCount, currentPage, pageSize, onPageChange, siblingCount, className }) => {
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
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, i) => {

        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={i} className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          // eslint-disable-next-line react/jsx-key
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
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
        <div className="arrow right" />
      </li>
    </ul>
  )
}

export default Pagination