import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import PricingPanel from './common/pricingPanel';

const styles = {
  container: {
    display: 'flex',
    fledDirection: 'row',
  },

};

class HireUs extends Component {
  render() {
    const classes = this.props.classes;
    return (
        <div className="container-fluid">
          <div className="col-12 text-center">
            <h1>Let us help you engineer your solution.</h1>
          </div>
          <div className={classes.container}>
            <PricingPanel header="Basic"/>
            <PricingPanel header="Medium"/>
            <PricingPanel header="Deluxe"/>
          </div>
          <div className="col-12 text-center">
            <h1>Make your app dreams come true.</h1>
          </div>
          <div className={classes.container}>
            <PricingPanel header="Basic"/>
            <PricingPanel header="Medium"/>
            <PricingPanel header="Deluxe"/>
          </div>
        </div>
    )
  }
}

export default withStyles(styles)(HireUs);
