import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        api.get('posts').then(response => {
            setPosts(response.data);
            console.log(posts);
        })
    }, [posts])

    return(
        <main>
            <div>
                <h1>Check out new posts</h1>
            </div>
            <div className="posts__wrapper">
                {
                    posts.map(post=>{ 
                        return(
                            <div key={post.id}>

                               <Link to={`/posts/${post.id}`}> <h2>{post.title.rendered}</h2></Link>
                                
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
}

export default Home;
