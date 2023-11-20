import ArrowIcon from "@/assets/svgs/ArrowIcon";
import { useState } from "react";


const Button = ({ className = '', isActive = false, disabled, action, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      type="button"
      className={`h-12 w-12 text-lg font-medium rounded-md flex justify-center items-center hover:bg-blue-500 disabled:bg-slate-400 disabled:text-white  hover:text-white ${isActive ? 'bg-blue-500 text-white' : 'bg-slate-300 text-gray-500'} ${className}`}>
      {children}
    </button>
  );
};

const Ellipsis = () => {
  return <span className='h-12 w-12 text-lg font-medium flex justify-center items-center'>...</span>
}


const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 30;
  const maxPagesToShow = 3;

  const renderButton = (key, value) => (
    <Button
      key={key}
      action={() => setCurrentPage(value)}
      isActive={currentPage === value}
      className='mx-2'
    >
      {value}
    </Button>
  );

  const renderPageNumbers = () => {
    const pages = [];

    // Case 1: If the total number of pages is less than or equal to maxPagesToShow
    if (totalPage <= maxPagesToShow) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(renderButton(i, i));
      }
    } else {
      // Case 2: If there are more pages than maxPagesToShow
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPage, startPage + maxPagesToShow - 1);

      // Display ellipsis or the first page if startPage is greater than 1
      if (startPage > 1) {
        pages.push(renderButton(1, 1));

        // Display ellipsis if startPage is greater than 2
        if (startPage > 2) {
          pages.push(<Ellipsis key='ellipsis-start' />);
        }
      }

      // Generate buttons for the pages within the range [startPage, endPage]
      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderButton(i, i));
      }

      // Display ellipsis or the last page if endPage is less than totalPage
      if (endPage < totalPage) {

        // Display ellipsis if endPage is less than totalPage - 1
        if (endPage < totalPage - 1) {
          pages.push(<Ellipsis key='ellipsis-end' />);
        }
        // Display the last page
        pages.push(renderButton(totalPage, totalPage));
      }
    }

    return pages;
  };

  return (
    <div className='flex justify-center items-center'>
      <Button disabled={currentPage === 1} action={() => setCurrentPage((prev) => prev - 1)} className='mr-10'>
        <ArrowIcon />
      </Button>

      {renderPageNumbers()}

      <Button disabled={currentPage === totalPage} action={() => setCurrentPage((prev) => prev + 1)} className='ml-10'>
        <ArrowIcon className='rotate-180' />
      </Button>
    </div>
  );
};

export default Pagination;