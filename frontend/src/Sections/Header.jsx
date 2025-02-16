import { useState } from 'react';
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
                <ul className={isMenuOpen ? 'active' : ''} >
                    <li>
                        <Link to='/' onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={toggleMenu}>About us</Link>
                    </li>
                    <li>
                        <Link to='/templesDirectory' onClick={toggleMenu}>Temples Directory</Link>
                    </li>
                    <li>
                        <Link to='/events' onClick={toggleMenu}>Events</Link>
                    </li>
                    <li>
                        <Link to='/blogs' onClick={toggleMenu}>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={toggleMenu}>Contact us</Link>
                    </li>
                    <li>
                        <Link to='/signup' onClick={toggleMenu}>Sign up</Link>
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