import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-white'>

      <div className='footer-container max-w-[1400px] flex justify-between gap-5 ma-auto'>

        <div className='footer-part w-[33.33%]'>
          <div className="footer-title">Quick links</div>
          <div className="footer-link">
            <ul className='add-star'>
              <Link to='#'>Home</Link>
              <Link to='#'>About us</Link>
              <Link to='#'>Temples directory</Link>
              <Link to='#'>Contact us</Link>
              <Link to='#'>Donate us</Link>
            </ul>
          </div>
        </div>

        <div className='footer-part w-[33.33%]'>
          <div className="footer-title">Social links</div>
          <div className="footer-link">
            <ul>
              <Link to='#'>Instagram</Link>
              <Link to='#'>Youtube</Link>
              <Link to='#'>Facebook</Link>
              <Link to='#'>Ramdoot Restores</Link>
            </ul>
          </div>
        </div>

        <div className='footer-part w-[33.33%] flex flex-col justify-center text-left'>
          <div className="footer-title">Subscribe for news</div>
          <form action="" className='flex flex-col'>
            <input type="email" placeholder='Please enter your email here' />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className=" w-full text-center h-10 flex justify-center">
        <p>&copy; {new Date().getFullYear()} Jai Shri Ram Sena. All Rights Reserved</p>
      </div>

    </footer>
  )
};

export default Footer;