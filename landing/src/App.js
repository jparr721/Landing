import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';

import Navbar from '../src/components/navbar';
import Routes from '../src/components/routes';

class App extends Component {
  render() {
    return (
          <div>
            <Navbar/>
            <Routes />
          </div>
    );
  }
}

export default App;
