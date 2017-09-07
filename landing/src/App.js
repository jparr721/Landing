import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';

import Header from '../src/components/header';
import Routes from '../src/components/routes';

const theme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: grey,
    error: red,
  }),
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <Routes />
        </MuiThemeProvider>
    );
  }
}

export default App;
