import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import './style.css';

const Post = ({ match }) => {
    
    const [post, setPost] = useState([]);
    const { params: { id } } = match;
    

    useEffect(() => {
        api.get(`posts/${id}`).then(response=>{
            setPost(response.data);
            console.log(post);
        })
    }, [])

    return(
        <main className='post'>
            {
            
               post.title !== undefined 
               ?
               (
                <div className="post__container">
                    <h1>{post.title.rendered}</h1>
                    <p>{post.content.rendered}</p>
                </div> 
               )
               : console.log(post)
                
                
            }          
        </main>
    );
}

export default Post;