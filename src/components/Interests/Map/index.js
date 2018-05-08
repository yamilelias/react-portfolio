import React from 'react';
import PropTypes from 'prop-types';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  componentDidMount() {
    this.props.fetchMapInfo('map');

    // AmCharts Map API not working with React, modules imported in index.ejs
    AmCharts.makeChart('mapchart', { // eslint-disable-line
      type: 'map',
      projection: 'winkel3',
      theme: 'light',
      imagesSettings: {
        rollOverColor: '#81DAF5',
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: '#81DAF5',
        color: '#1d3f72',
      },

      areasSettings: {
        unlistedAreasColor: '#81DAF5',
        outlineThickness: 0.1,
      },

      dataProvider: {
        map: 'worldLow',
        zoomLevel: 2.5,
        zoomLatitude: 11.618746,
        zoomLongitude: -87.583129,
        images: this.props.data,
      },
    });
  }

  render() { // eslint-disable-line
    return (
      <div>
        <div id='mapchart'></div>
        <div className="copyright">Made with <i className="fas fa-heart"></i> using <a href="https://www.amcharts.com/">AmCharts</a>.
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
  fetchMapInfo: PropTypes.func.isRequired,
};

export default Map;
