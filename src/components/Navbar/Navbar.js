import React, { useEffect, useState } from 'react';

import './Navbar.css';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img className='nav__logo' src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' alt='Netflix' />
                <img className='nav__avatar' src='https://openclipart.org/image/2400px/svg_to_png/190113/1389952697.png' alt='' />
            </div>
        </div>
    )
}

export default Navbar
