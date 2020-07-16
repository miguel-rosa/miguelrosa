import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './style.css';

import Card from '../../components/Card';

const Portfolio = () => {

    const [works, setWorks] = useState([]);
    
    useEffect( () => {
        api.get('work?_embed').then(response => {
            setWorks(response.data);       
        })
    }, [])
    

    return(
        <main className="portfolio">
            <div className="portfolio__container">
                <div className="portfolio__hero">
                <h1 className="portfolio__hero__title">
                        <b>Portfólio</b>
                    </h1>
                    <p className="portfolio__hero__description">Últimos trabalhos</p>
                    
                </div>
                <div className="portfolio__works__wrapper">
                    {   
                        works.map(work => (
                           <Card 
                            key={`work-${work.id}`}
                            id={work.id} 
                            title={work.title.rendered} 
                            description={work.content.rendered}
                            type="portfolio" />
                            )
                        )
                    }
                </div>
            </div>
        </main>
    );
}

export default Portfolio;
