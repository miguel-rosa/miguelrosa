import React, {useState, useEffect} from 'react';
import postsApi from '../../services/postsApi';

import './style.css';
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        postsApi.get('posts?_embed').then(response => {
            setPosts(response.data);           
        })
    }, [])
    console.log(posts)

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
                            <div key={post.id} className="portfolio__post">
                                <div className="portfolio__post__container">
                                    <Link to={`/posts/${post.id}`}> 
                                        <div className="portfolio__post__wrapper">
                                            <h2 className="portfolio__post__title">
                                                {post.title.rendered}
                                            </h2>
                                            <span>
                                            </span>
                                        </div>
                                        <p className="portfolio__post__excerpt">
                                            {String(post.excerpt.rendered).slice(0,100)}
                                        </p>
                                   </Link> 
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </main>
    );
}

export default Portfolio;
