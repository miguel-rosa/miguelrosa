import React from 'react';


import './style.css';

import MainButton from '../../components/MainButton';
import SecondButton from '../../components/SecondButton';

const Home = () => {

    return(
        <main className="home">
            <div className="home__container">
                <div className="home__hero">
                    <h1 className="hero__title">
                        Cooperativa de pessoas<br/>
                        <b>desenvolvedoras</b> brasileiras
                    </h1>
                    <p className="hero__description">
                    Somos uma organizaçõe autogeridas e democrática, em busca de projetos socialmente relevantes<br/>
                    </p>
                    <div className="hero__footer">
                        <MainButton href="https://discord.gg/6bykCYmr" text="Conheça mais" />
                        <SecondButton href="/blog" text="Algum link importante" />
                        
                    </div>
                </div>
               
            </div>
        </main>
    );
}

export default Home;
