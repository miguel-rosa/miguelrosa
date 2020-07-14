import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';
import Post from './pages/Post';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Route component={Home} path="/" exact/>
            <Route component={Post} path="/posts/:id" exact/>
        </BrowserRouter>
    );
}

export default Routes;