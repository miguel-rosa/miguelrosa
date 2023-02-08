import React from 'react';
import { BsDiscord } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './style.css';

const Footer = ()=> {
    return(
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copy">2022 © COOPERA.DEV.BR</p> 
                <div className="footer__icons">
                    <a className="footer__wrapper-icon" href="https://discord.gg/6bykCYmr">
                        <BsDiscord className="footer__icon"/>
                    </a>
                    <a className="footer__wrapper-icon" href="https://github.com/coopera-dev-br/">
                        <FaGithub className="footer__icon" />
                    </a> 
                    <a className="footer__wrapper-icon" href="https://www.linkedin.com/company/coopera-dev-br/">
                        <FaLinkedinIn className="footer__icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;