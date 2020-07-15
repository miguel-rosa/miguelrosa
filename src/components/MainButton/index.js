import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const MainButton = (props) => {
    return(
        <Link to={props.to} href={props.href} className="Main-Button">
            {props.text}
        </Link>
    );
}

export default MainButton;