import React from 'react';
import './style.css';
import {Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="header__container">
                <Link className='header__container__title' to='/'>Miguel Rosa</Link> 
                <a className="header__container__button" href="https://wa.me/5511950465529">Contato</a>
            </div>
        </header>
    );
}

export default Header;
