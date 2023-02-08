import React from 'react';
// import { Link } from 'react-router-dom'
import './style.css';

const MainButton = (props) => {
    return(
        <a to={props.to} href={props.href} className="Main-Button">
            {props.text}
        </a>
    );
}

export default MainButton;