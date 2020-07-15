import React from 'react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './style.css'

const Footer = ()=> {
    return(
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copy">2020 © Miguel Rosa</p> 
                <div className="footer__icons">
                    <a className="footer__wrapper-icon" href="mailto:miguelgoncvs@gmail.com">
                        <FiSend className="footer__icon"/>
                    </a>
                    <a className="footer__wrapper-icon" href="https://github.com/miguel-rosa">
                        <FaGithub className="footer__icon" />
                    </a> 
                    <a className="footer__wrapper-icon" href="https://www.linkedin.com/in/miguelgoncvs/">
                        <FaLinkedinIn className="footer__icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;