import React from 'react';
import{Link} from 'react-router-dom';

 const NoteSidebar = () => {
      return (
        <div className='flex sm:ml-4 md:ml-10 bg-teal-500'>
          <div className='flex flex-col h-screen p-2 bg-white-500 shadow md:w-40 sm:w-5 ml-2'>
            <div className='space-y-10'>
              <div className='flex-1'>
                <ul className='pt-2 pb-4 space-y-1 text-sm'>
                  <li className='rounded-sm'>
                    <Link to="/notes/home" className='flex items-center p-2 space-x-3 rounded-md'>
                      
                   <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='w-6 h-6'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     strokeWidth={2}
                   >
                     <path
                       strokeLinecap='round'
                       strokeLinejoin='round'
                       d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                     />
                   </svg>  
                      <span className='hidden md:block text-xl'>Home</span>
                    </Link>
                  </li>
                  <li className='rounded-sm'>
                    <Link to="/notes" className='flex items-center p-2 space-x-3 rounded-md'>
                        <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                    >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                    />
                  </svg> 
                      <span className='hidden md:block text-xl'>Notes</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default NoteSidebar;
 




