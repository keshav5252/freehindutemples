import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className='flex justify-between items-center px-5'>
                <img src="/logo.png" alt="logo" width={70} height='auto' />
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/templesDirectory'>Temples Directory</Link>
                    </li>
                    <li>
                        <Link to='/events'>Events</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact us</Link>
                    </li>
                </ul>
                <span className="material-symbols-outlined" onClick={toggleMenu}>
                    menu
                </span>
            </nav>
        </header>
    );
};

export default Header;