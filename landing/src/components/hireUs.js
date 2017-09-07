import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import PricingPanel from './common/pricingPanel';


class HireUs extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className="col-12 text-center" style={{ paddingTop: 80}}>
        <h1>Pick the plan that's right for you</h1>
      </div>

    );
  }
}

export default HireUs;
