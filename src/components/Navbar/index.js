import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import './style.css'
import { cart, logo, search } from '../../utils/assets';

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setMenuClicked(!menuClicked);
  const closeMobileMenu = () => setButton(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )
  }, []);

  document.addEventListener('scroll', function(e) {
    const scrollHeight = window.scrollY;
    const nav = document.getElementsByClassName('navbar');
  
    if (scrollHeight > 30) {
      nav[0].style.background = 'black';
    } else {
      nav[0].style.background = 'transparent';
    }
  });
  
  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <div className="navbar-icon">
                <img src={logo} alt='arkademi' />
              </div>
            </Link>
            <div className="navbar-input">
              <input
                type="text" 
                id="cari_kursus" 
                name="Cari Kursus" 
                placeholder="Cari Kursus"
              >
              </input>
              <Button 
                type="submit"
                buttonSize='btn--medium'
                buttonColor='transparent'
                className='navbar-input-btn'
              >
                <img className="search-icon" src={search} alt='' />
              </Button>
            </div>
            <div className='menu-icon' onClick={handleClick}>
              {menuClicked ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='#prakerja' className='nav-links' onClick={closeMobileMenu}>
                  Prakerja
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#kelas'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Kelas
                  <FaAngleDown className="fa-angle"/>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#kursus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Kursus
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#tentang'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Tentang
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#blog'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#cart'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <div className="nav-cart">
                    <img src={cart} alt='cart' />
                  </div>
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <>
                  <Link to='#masuk' className='btn-link'>
                    <Button 
                      buttonStyle='btn--outline'
                      buttonColor='white'
                    >
                      Masuk
                    </Button>
                  </Link>
                  <Link to='#daftar' className='btn-link'>
                    <Button 
                      buttonStyle='btn--outline'
                      buttonColor='blue'
                    >
                      Daftar
                    </Button>
                  </Link>
                  </>
                ) : (
                  <Link to='#sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Daftar
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;