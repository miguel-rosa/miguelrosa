import React, {useState, useEffect} from 'react';
import postsApi from '../../services/postsApi';
import './style.css';

import Card from '../../components/Card';

const Portfolio = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        postsApi.get('posts?_embed').then(response => {
            setPosts(response.data);           
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
                <div className="portfolio__posts__wrapper">
                    {   
                        posts.map(post=> (
                           <Card 
                            key={`portfolio-${post.id}`}
                            id={post.id} 
                            title={post.title.rendered} 
                            description={post.excerpt.rendered}
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
