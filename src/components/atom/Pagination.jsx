
import React, { useState } from 'react';

const Button = ({ className = '', isActive = false, disabled, action, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      type="button"
      className={`h-12 w-12 text-lg font-medium rounded-md flex justify-center items-center hover:bg-blue-700 disabled:bg-slate-400 disabled:text-white  hover:text-white ${isActive ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} ${className}`}>
      {children}
    </button>
  )
}

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log({ currentPage })
  const totalPage = 10;
 


  return (
    <div className='flex justify-center items-center'>
      <Button disabled={currentPage === 1} action={() => setCurrentPage((prev) => prev - 1)} className='mr-10'> &lt; </Button>



      {/* gater than 3 show */}
      {currentPage > 3 &&
        <>
          <Button action={() => setCurrentPage(1)}>1</Button>
          <button className='mx-2 h-12 w-12 text-lg font-medium'>
            ...
          </button>
        </>

      }

      {/* 1 to 5 show */}

      {(currentPage <= 3) && [... new Array(4)].map((page, index) =>
        <div>
          <Button action={() => setCurrentPage(index + 1)} key={index} className='mx-2' isActive={currentPage === index + 1}>
            {index + 1}
          </Button>
        </div>
      )}

      {/* 4 to 6 show show */}

      {(currentPage >= 4 && currentPage <= 7) && [... new Array(6)].map((page, index) =>
        <div>
          <Button action={() => setCurrentPage(index + 3)} isActive={currentPage === index + 3} key={index} className='mx-2'>
            {index + 3}
          </Button>
        </div>
      )}



      {/* 6 to 10  show */}
      {currentPage >= 8 &&
        [...new Array(4)].map((page, index) =>
          <div>
            <Button action={() => setCurrentPage(index + 7)} isActive={currentPage === index + 7} key={index} className='mx-2'>
              {index + 7}
            </Button>
          </div>
        )}


      {/* less than 8 show */}
      {currentPage < 8 &&
        <>
          <button className='mx-2 h-12 w-12 text-lg font-medium'>
            ...
          </button>
          <Button action={() => setCurrentPage(10)}>10</Button>
        </>
      }


      <Button disabled={currentPage === totalPage} action={() => setCurrentPage((prev) => prev + 1)} className='ml-10'> &gt; </Button>
    </div>
  );
};

export default Pagination;