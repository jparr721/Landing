import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Paper from './common/paper';

const styles = {
};

class HireUs extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <div id="top-section">
          <div className="container">
            <div className="col-12 text-center" style={{ paddingTop: 80, paddingBottom: 60}}>
              <h1>Pick the plan that's right for you</h1>
            </div>
            <div className="row card-container text-center">
              <div className="col-4">
                <Paper>
                  <h1 className="card-header">Bronze</h1>
                </Paper>
              </div>
              <div className="col-4">
                <Paper>
                  <h1 className="card-header">Silver</h1>
                </Paper>
              </div>
              <div className="col-4">
                <Paper>
                  <h1 className="card-header">Gold</h1>
                </Paper>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom-section">

        </div>
      </div>

    );
  }
}

export default withStyles(styles)(HireUs);
