import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Portfolio from './pages/Portfolio';
import Work from './pages/Work'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Route component={Home} path="/" exact/>
            <Route component={Blog} path="/blog" exact/>
            <Route component={Article} path="/blog/:id" exact/>
            <Route component={Portfolio} path="/portfolio" exact/>
            <Route component={Work} path="/portfolio/:id" exact/>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;