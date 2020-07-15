import React /*, {useState, useEffect} */ from 'react';
/*
import postsApi from '../../services/postsApi'
import './style.css';
*/
const Post = ({ match }) => {
    /*
    const [post, setPost] = useState([]);
    const { params: { id } } = match;

    useEffect( () => {
        postsApi.get(`posts/${id}?_embed`).then(response=>{
            setPost(response.data);
            
        })
    }, [post, id])
    */
    return(
        <main className='post'>
            {
            /*
            post.title !== undefined 
            ?
            (
             <div className="post__container">
                 <h1>{post.title.rendered}</h1>
                 <p>{post.content.rendered}</p>
             </div> 
            )
            : console.log(post)
             */
             
         }          
        </main>
    );
}

export default Post;