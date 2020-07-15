import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const SecondButton = (props) => {
    return(
        <Link to={props.to} className="Second-Button">
            {props.text}
        </Link>
    );
}

export default SecondButton;