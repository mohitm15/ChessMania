import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticlesListPage from "./Pages/ArticlesListPage";
import ArticlePage from "./Pages/ArticlePage";
import NotFoundPage from "./Pages/NotFoundPage";
import FAQPage from "./Pages/FAQPage";
import NavbarComponent from "./navbar";
import Footer from "./components/Footer";
import TimeZoneComponent from "./components/Timezone";
import "./App.css";
import LichessProfilePage from "./Pages/LichessProfilePage";
import Alert from "./components/Alert";


function App() {

  const [progress, setProgressFromUseState] = useState(0);

  const setProgress = (progress) => {
    setProgressFromUseState({ progress: progress });
  };

  return (
    <Router>
      <div className="App">
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <NavbarComponent />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact/>
            <Route path="/articles-list" component={ArticlesListPage} exact/>
            <Route path="/article/:name" component={ArticlePage} exact/>
            <Route path="/FAQ" component={FAQPage} exact/>
            <Route path="/lichess-profile" render={() => <LichessProfilePage setProgress={setProgress} /> } exact/>
            <Route component={NotFoundPage} exact />
          </Switch>
          <TimeZoneComponent />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
