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
                    <h1 className="hero__title">Olá!<br/> meu nome é<br/><b>Miguel Rosa.</b></h1>
                </div>
                <div className="blog__posts__wrapper">
                    {   
                        posts.map(post=> (
                            <div key={post.id} className="blog__post">
                                <div 
                                    className="blog__post__container"
                                    style={{backgroundImage: ` linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url('${post._embedded["wp:featuredmedia"][0].link})`}}
                                >
                                    <Link to={`/posts/${post.id}`}> <h2 className="blog__post__title">{post.title.rendered}</h2></Link> 
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
