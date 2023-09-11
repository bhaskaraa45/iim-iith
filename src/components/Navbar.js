
import React, { useState, useEffect } from 'react';
import iith_logo from '../assets/images/iith_logo.png';
import '../styles/NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import iim_logo_best from '../assets/images/iim_logo_best.png'
import iim_name_logo from '../assets/images/iim_logo_without_bg.gif'
import iith_name_logo from '../assets/images/horzlogolong.png'

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const changeState = () => {
    setClicked(!clicked);
  };

  const [chalu, setChalu] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 90) {
      setChalu(true);
    } else {
      setChalu(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav id='navigation'>
        <a href='index.html'>
          <div className='mobile'>
            <img src={iith_logo} height={72} className='iithLogo' alt='IIT Hyderabad Logo' />
            <span class="vertical-line"></span>
            <img src={iim_logo_best} height={56} className='iimLogo' alt='IIM Logo' />
          </div>
          <div className='desktop'>
            <img src={chalu ? iith_name_logo : iith_logo} height={72} className='iithLogo' alt='IIT Hyderabad Logo' />
            <span class="vertical-line"></span>
            <img src={chalu ? iim_name_logo : iim_logo_best} height={chalu ? 72 : 56} className='iimLogo' alt='IIM Logo' />
          </div>
        </a>
        <div>
          <ul id={chalu ? 'scrolled' : ''} className={clicked ? 'navBar clicked' : 'navBar'}>
            <li>
              <a className='active' href='index.html'>
                Home
              </a>
            </li>
            <li>
              <a href='index.html'>Team</a>
            </li>
            <li>
              <a href='index.html'>Membership</a>
            </li>
            <li>
              <a href='https://www.iim-india.net/' target='_blank'>
                IIM HO
              </a>
            </li>
            <li>
              <a href='index.html'>About</a>
            </li>
            <li>
              <a href='index.html'>Contact Us</a>
            </li>
          </ul>
        </div>

        <div id='phone' onClick={changeState}>
          <i id='bar'>{clicked ? <FaTimes /> : <FaBars />}</i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
