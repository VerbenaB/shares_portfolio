import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import HomeContainer from "./containers/HomeContainer";
import SharesContainer from "./containers/SharesContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/portfolio" component={SharesContainer}/>
          </Switch>
      </>
    </Router>
  );
}

export default App;