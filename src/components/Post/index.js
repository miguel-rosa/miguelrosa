import React from "react";
import './style.css';

const Post = (props) => {
    return(
        <div 
            key={props.id}
            className="Post"
        >
            <h1 className="Post-Title">{props.title}</h1>
            <div 
                className="Post-Content"  
                dangerouslySetInnerHTML={{ __html: props.content }}
            >    
            </div>
        </div> 
    );
}

export default Post;