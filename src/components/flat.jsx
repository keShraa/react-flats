import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style, price, priceCurrency, name } = this.props;
    return (
      <div className="card" style={style}>
        <div className="card-category">
          {price + ' '}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
