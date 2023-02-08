import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';


const Header = () => {
   
    return(
        <header className="header">
            <div className="header__container">
                <Link className='header__container__title' to='/'>COOPERA.DEV.BR</Link>    
                
            </div>
        </header>
    );
}

export default Header;
