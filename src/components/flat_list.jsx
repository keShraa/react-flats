import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = (props) => {
    return props.flats.map((flat) => {
      return (
        <Flat
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${flat.imageUrl})` }}
          name={flat.name}
          key={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          selectGif={props.selectGif}
        />
      );
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList(this.props)}
      </div>
    );
  }
}

export default FlatList;
