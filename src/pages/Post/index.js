import React , {useState, useEffect} from 'react';

import postsApi from '../../services/postsApi'
import './style.css';

const Post = ({ match }) => {
    
    const [post, setPost] = useState([]);
    const { params: { id } } = match;

    useEffect( () => {
        postsApi.get(`posts/${id}?_embed`).then(response=>{
            setPost(response.data);
        })
    }, [id])
    
    return(
        <main className='post'>
            <div className='post__container'>
                <div className="post__hero">
                    {
                        post.title !== undefined &&
                            (
                                <div>
                                    <h1>{post.title.rendered}</h1>
                                    <p className="post-description">{post.content.rendered}</p>
                                </div> 
                            )
                    }          
                </div>
            </div>
        </main>
    );
}

export default Post;