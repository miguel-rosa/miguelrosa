import React from 'react';


import './style.css';

import MainButton from '../../components/MainButton'
import SecondButton from '../../components/SecondButton'

const Home = () => {

    return(
        <main className="home">
            <div className="home__container">
                <div className="home__hero">
                    <h1 className="hero__title">
                        Olá! sou o<br/>
                        <b>Miguel Rosa.</b>
                    </h1>
                    <p className="hero__description">
                        Trabalho como desenvolvedor front-end júnior na Upsites Digital
                    </p>
                    <div className="hero__footer">
                        <MainButton to="/portfolio" text="Portfólio" />
                        <SecondButton to="/blog" text="Blog" />
                        
                    </div>
                </div>
               
            </div>
        </main>
    );
}

export default Home;
