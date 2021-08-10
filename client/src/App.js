import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import HomeContainer from "./containers/HomeContainer";
import SharesContainer from "./containers/SharesContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#99B898"
      },
      secondary: {
        main: "#E84A5F"
      }
    } 
  })
  
  
  return (
    
    
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/portfolio" component={SharesContainer}/>
          </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;