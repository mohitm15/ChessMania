import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticlesListPage';
import ArticlePage from './Pages/ArticlePage';
import Navbar from './navbar';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/articles-list" component={ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
          </div>
        </div>
    </Router>

  );
}

export default App;
