import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PageWrapper from './layout';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <PageWrapper>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </PageWrapper>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
