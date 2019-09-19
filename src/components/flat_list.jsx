import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = (props) => {
    return props.flats.map((flat) => {
      return <Flat style={{ backgroundImage: `url(${flat.imageUrl})` }} name={flat.name} key={flat.name} selectGif={props.selectGif} />;
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
