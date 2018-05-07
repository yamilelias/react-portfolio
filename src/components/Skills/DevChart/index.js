import React from 'react';
import PropTypes from 'prop-types';

class DevChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  componentDidMount() {
    this.props.fetchSkills('skills');

    // AmCharts API not working with React, modules imported in index.ejs
    AmCharts.makeChart('chartdiv', { // eslint-disable-line
      type: 'serial',
      theme: 'light',
      dataProvider: this.props.data,
      valueAxes: [{
        maximum: 10,
        minimum: 0,
        axisAlpha: 0,
        dashLength: 4,
        position: 'left',
      }],
      startDuration: 1,
      graphs: [{
        balloonText: '<span style="font-size:13px;">[[category]]: <b>[[value]]</b></span>',
        bulletOffset: 10,
        bulletSize: 52,
        colorField: 'color',
        cornerRadiusTop: 8,
        customBulletField: 'bullet',
        fillAlphas: 0.8,
        lineAlpha: 0,
        type: 'column',
        valueField: 'points',
      }],
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      rotate: true,
      marginBottom: 0,
      autoMargins: false,
      categoryField: 'name',
      categoryAxis: {
        axisAlpha: 0,
        gridAlpha: 0,
        inside: true,
        tickLength: 0,
      },
    });
  }

  render() { // eslint-disable-line
    return (
      <div>
        <div id="chartdiv"></div>
        <div className="copyright">Made with <i className="fas fa-heart"></i> using <a href="https://www.amcharts.com/">AmCharts</a>.</div>
      </div>
    );
  }
}

DevChart.propTypes = {
  data: PropTypes.array.isRequired,
  fetchSkills: PropTypes.func.isRequired,
};

export default DevChart;
