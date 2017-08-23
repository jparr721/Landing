import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  panel: {
    width: '85%',
    backgroundColor: 'rgba(3, 169, 244, 0.5)',
  },
};

class PricingPanel extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classNames(classes.container, 'text-center')}>
        <div className={classes.panel}>
          <h1>{this.props.header}</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PricingPanel);
