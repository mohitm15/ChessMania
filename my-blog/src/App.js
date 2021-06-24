import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticlesListPage';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from './Pages/NotFoundPage';
import Navbar from './navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div id="page-body">
            <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/articles-list" component={ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
            <Route component={NotFoundPage}/>
            </Switch>
          </div>
          <Footer />
        </div>
    </Router>

  );
}

export default App;
