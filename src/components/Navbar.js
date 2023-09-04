import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []); //Para renderizar solo una unica vez el boton de iniciar sesión

    window.addEventListener('resize', showButton);
    //fa-solid fa-box-open fa-fw"
    //fa-solid fa-earth-americas
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <span className="hbc-text">HBC</span> <span className="multicourier-text">Multicourier</span>
                        <i className="fa-solid fa-globe fa-fw ms-1"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Inicio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/presentation' className='nav-links' onClick={closeMobileMenu}>Quienes somos</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Servicios</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contáctanos</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/simulator' className='nav-links' onClick={closeMobileMenu}><i className='fa-solid fa-calculator fa-fw'></i>Simulador </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/user' className='nav-links' onClick={closeMobileMenu}><i className='fas fa-user fa-fw'></i>Casillero </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar