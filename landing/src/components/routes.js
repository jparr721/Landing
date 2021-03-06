import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from './home';
import Portfolio from './portfolio';
import HireUs from './hireUs';

const Routes = () => {
  return (
      <routes>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/hire-us' component={HireUs} />
          </Switch>
      </routes>
  )
};

export default Routes;
