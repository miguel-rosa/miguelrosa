import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Card = (props) => {

  
    return(
        <div key={props.id} className="Card-Post">
            <div className="Card-Container">
                <Link to={`/${props.type}/${props.id}`}> 
                    <div className="Card-Wrapper">
                        <h2 className="Card-Title"> 
                            {props.title}
                        </h2>
                        <span className="Card-Date">
                            {props.date}
                        </span>
                    </div>
                    <p className="Card-Excerpt"
                     dangerouslySetInnerHTML={
                        { __html: String(props.description).slice(0,100) }}>
                        
                    </p>
                </Link> 
            </div>
        </div>
    );
}

export default Card;