import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginContainer from './containers/LoginContainer';
import CadastroContainer from './containers/CadastroContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/cadastro" component={CadastroContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}


export default App;
