import React , {useState, useEffect} from 'react';

import Post from '../../components/Post'

import api from '../../services/api'
import './style.css';

const Article = ({ match }) => {
    
    const [article, setArticle] = useState([]);
    const { params: { id } } = match;

    useEffect( () => {
       api.get(`posts/${id}?_embed`).then(response=>{
            setArticle(response.data);
        })
    }, [id])
    
    return(
        <main className="article">
            <div className="article__container">
                <div className="article__hero">
                    {
                        article.title !== undefined &&
                            (
                                <Post
                                    key={article.id}
                                    title={article.title.rendered}
                                    content={article.content.rendered}
                                />
                            )
                    }          
                </div>
            </div>
        </main>
    );
}

export default Article;