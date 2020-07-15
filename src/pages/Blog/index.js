import React, {useState, useEffect} from 'react';
import postsApi from '../../services/postsApi';

import Card from '../../components/Card';

import './style.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        postsApi.get('posts?_embed').then(response => {
            setPosts(response.data);           
        })
    }, [])
    console.log(posts)

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
                                id={post.id} 
                                title={post.title.rendered} 
                                description={post.excerpt.rendered}
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
