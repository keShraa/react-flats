import React, { Component } from 'react';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';
import FLATS from '../../data/flats.js';
import MapReact from './map_react.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={FLATS} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <MapReact selectFlat={FLATS[0]} />
        </div>
      </div>
    );
  }
}

export default App;
