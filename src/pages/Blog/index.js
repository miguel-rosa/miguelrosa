import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import Card from '../../components/Card';

import './style.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        api.get('posts?_embed').then(response => {
            setPosts(response.data);    
            console.log(response.data);
        })
    }, [])

    function handleDate(date){
        return `${date.slice(5,7)}/${date.slice(0,4)}`
    }

    
    return(
        <main className="blog">
            <div className="blog__container">
                <div className="blog__hero">
                <h1 className="blog__hero__title">
                        <b>Blog</b>
                    </h1>
                    <p className="blog__hero__description">Últimas postagens</p>
                    
                </div>
                <div className="blog__posts__wrapper">
                    {   
                        posts.map(post=> (
                            <Card 
                                key={`post-${post.id}`}
                                id={post.id} 
                                title={post.title.rendered} 
                                description={post.excerpt.rendered}
                                date={handleDate(post.date)}
                                type="posts" />
                            )
                        )
                    }
                </div>
            </div>
        </main>
    );
}

export default Blog;
