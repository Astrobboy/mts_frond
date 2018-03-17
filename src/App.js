import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginContainer from './containers/LoginContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Route exact path="/login" component={LoginContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}


export default App;
