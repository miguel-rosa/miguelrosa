import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Route component={Home} path="/" exact/>
            <Route component={Blog} path="/blog" exact/>
            <Route component={Post} path="/posts/:id" exact/>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;