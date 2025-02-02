import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-white '>
     
      <div className=" w-full text-center h-10 flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} Free Hindu Temple Movement. All Rights Reserved</p>
      </div>

    </footer>
  )
};

export default Footer;