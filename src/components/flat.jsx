import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-category">150 EUR</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
