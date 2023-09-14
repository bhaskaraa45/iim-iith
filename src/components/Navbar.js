
import React, { useState, useEffect } from 'react';
import iith_logo from '../assets/images/iith_logo.png';
import '../styles/NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import iim_logo_best from '../assets/images/iim_logo_best.png'
import iim_name_logo from '../assets/images/iim_logo_without_bg.gif'
import iith_name_logo from '../assets/images/horzlogolong.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('/'); // Initialize with 'home' or the default active item.
  const [chalu, setChalu] = useState(false);
  // const navigate = useNavigate(); 
  const location = useLocation();

  const changeState = () => {
    setClicked(!clicked);
  };

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setChalu(true);
    } else {
      setChalu(false);
    }
  };
  useEffect(() => {
    setActiveNavItem(location.pathname);
    // Update the active link in your navigation bar based on the 'location' object.
    // You can use 'location.pathname' to determine the current route.
    // setActiveNavItem()
  }, [location]);

  const handleNavItemClick = (item, path) => {
    setActiveNavItem(item);
    setClicked(false);
    // navigate(path); // Use history to navigate to the route.
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <nav id={(activeNavItem==='/' && !chalu && !clicked) ? 'navigation' : ''} >
        <a href='index.html'>
          <div className='mobile'>
            <img src={iith_logo} height={72} className='iithLogo' alt='IIT Hyderabad Logo' />
            <span class="vertical-line"></span>
            <img src={iim_logo_best} height={56} className='iimLogo' alt='IIM Logo' />
          </div>



          <div className='desktop'>
            <img src={ (activeNavItem==='/' && chalu) ? iith_name_logo : iith_logo} height={48} className='iithLogo' alt='IIT Hyderabad Logo' />
            <span class="vertical-line"></span>
            <img src={ (activeNavItem==='/' && chalu) ? iim_name_logo : iim_logo_best} height={(activeNavItem==='/' && chalu) ? 50 : 42} className='iimLogo' alt='IIM Logo' />
          </div>


        </a>
        <div>
          <ul id={(activeNavItem==='/' && !chalu) ? 'notScrolled' : ''} className={clicked ? 'navBar clicked' : 'navBar'}>
            <li>
              <Link
                to="/"
                className={activeNavItem === '/' ? 'active' : ''}
                onClick={() => handleNavItemClick('/', '/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className={activeNavItem === '/team' ? 'active' : ''}
                onClick={() => handleNavItemClick('/team', '/team')}
              >
                Team
              </Link>
            </li>
            <li>
              <Link href='index.html'>Membership</Link>
            </li>
            <li>
              <Link href='https://www.iim-india.net/' target='_blank'>
                IIM HO
              </Link>
            </li>
            <li>
              <Link href='index.html'>About</Link>
            </li>
            <li>
              <Link href='index.html'>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={(activeNavItem==='/' && !chalu) ? 'phone iconWhite' : 'phone'} onClick={changeState}>
          <i id='bar'>{clicked ? <FaTimes /> : <FaBars color={(activeNavItem==='/' && !chalu) ?  "rgb(198, 198, 198)" : "black"}/>}</i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
