import React, { useState, useEffect } from 'react';
import './style.css'

import Post from '../../components/Post';
import api from '../../services/api'

const Work = ({ match }) => {

    const [work, setWorks] = useState([]);
    const { params: { id } } = match;

    useEffect( () => {
        api.get(`work/${id}?_embed`).then( response => {
            setWorks(response.data);
        })
    }, [id])

    return(
        <main className="work">
            <div className="work__container">
                <div className="work__hero">
                    {
                      work.title !== undefined &&
                      (
                          <Post
                              key={work.id}
                              title={work.title.rendered}
                              content={work.content.rendered}
                          />
                      )
                    }
                </div>
            </div>
        </main>
    );
}

export default Work;