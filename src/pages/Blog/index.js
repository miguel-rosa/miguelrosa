import React, {useState, useEffect} from 'react';
import postsApi from '../../services/postsApi';

import './style.css';
import { Link } from 'react-router-dom'

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
                            <div key={post.id} className="blog__post">
                                <div className="blog__post__container">
                                    <Link to={`/posts/${post.id}`}> 
                                        <div className="blog__post__wrapper">
                                            <h2 className="blog__post__title">
                                                {post.title.rendered}
                                            </h2>
                                            <span>
                                            </span>
                                        </div>
                                        <p className="blog__post__excerpt">
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

export default Blog;
