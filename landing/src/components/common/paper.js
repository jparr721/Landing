import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';

class Paper extends Component {
  render () {
    return (
      <div className="paper">
        {this.props.children}
      </div>
    );
  }
}

export default Paper;
