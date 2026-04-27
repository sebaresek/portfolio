import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Social from '../Social/Social';


const NavBar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const shouldShowMenuButton = window.innerWidth <= 880;
      setShowMenuButton(shouldShowMenuButton);
      setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav>
      <div className='container-navbar'>
        {showMenuButton && (
          <div className='menu-button'>
            <button className={`btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className='icon'>
                <svg viewBox='0 0 175 80' width='50' height='50'>
                  <rect width='80' height='15' fill='#f0f0f0' rx='10'></rect>
                  <rect y='30' width='80' height='15' fill='#f0f0f0' rx='10'></rect>
                  <rect y='60' width='80' height='15' fill='#f0f0f0' rx='10'></rect>
                </svg>
              </span>
              <span className='text'></span>
            </button>
          </div>
        )}

        {(showMenuButton && menuOpen) || !showMenuButton ? (
            <div className='buttons'>
                <button onClick={() => scrollToSection('inicio')}> Inicio 
                    <span></span><span></span><span></span><span></span>
                </button>         
                <button onClick={() => scrollToSection('proyectos')}> Proyectos 
                    <span></span><span></span><span></span><span></span>
                </button>
                <button onClick={() => scrollToSection('habilidades')}> Habilidades 
                    <span></span><span></span><span></span><span></span>
                </button> 
            </div>
        ) : null}
      </div>

      <div className='social'>
        <Social />
      </div>
    </nav>
  );
};

export default NavBar;
