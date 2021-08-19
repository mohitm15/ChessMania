import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticlesListPage';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from './Pages/NotFoundPage';
import FAQPage from './Pages/FAQPage';
import Navbar from './navbar';
import Footer from './components/Footer';
import TimeZoneComponent from './components/Timezone';
import './App.css';
import LichessProfilePage from './Pages/LichessProfilePage';
import Alert from './components/Alert';

function App() {



  return (
    <Router>
        <div className="App">
          <Navbar />
          <Alert type="success" message="welcome to chessmania"/>
          <div id="page-body">
            <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/articles-list" component={ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
            <Route path="/FAQ" component={FAQPage} />
            <Route path="/lichess-profile" component={LichessProfilePage}/>
            <Route component={NotFoundPage}/>
            </Switch>
            <TimeZoneComponent />
          </div>
          <Footer />
        </div>
    </Router>

  );
}

export default App;
