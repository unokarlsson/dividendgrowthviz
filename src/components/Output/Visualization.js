/* global Plotly:true */

import React, {Component} from 'react';
import Dimensions from 'react-dimensions';

import createPlotlyComponent from 'react-plotly.js/factory';

// How to get Plotly working, one fo many ways:
// 
//  (* Install npm install react-plotly.js plotly.js?)
// 
//  * Add the script below after the title in the index.html file
//    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
// 
//  * In the componenet file that should show the plot add the following:
//    * Make Plotly global
//      /* global Plotly:true */
// 
//    * Import the factory as createPlottyComponenet:
//      import createPlotlyComponent from 'react-plotly.js/factory';
//
//    * Create a constant by using the factory:
//      const Plot = createPlotlyComponent(Plotly);
// 
//    * Add the JSX Plot code:
//      <Plot
//         data={...}
//         layout={...}
//         frames={...}
//         config={...}
//      />

/*
// Example using ES6 syntax
import React from 'react'
import Dimensions from 'react-dimensions'

class MyComponent extends React.Component {
  render() (
    <div
      containerWidth={this.props.containerWidth}
      containerHeight={this.props.containerHeight}
    >
    </div>
  )
}

export default Dimensions()(MyComponent) // Enhanced component
*/

const Plot = createPlotlyComponent(Plotly);

class Visualization extends Component {

  render() {
    const visualizationStyle = {
      // width: '90%',
      // height: '90%',
      display: 'flex',
      justifyContent: 'center',
      margin: '10px'
    };

    const plotStyle = {
      backgroundColor: '#E8F5E9'
    };

    console.log("containerWidth=" + this.props.containerWidth + ", " +
                "containerHeight=" + this.props.containerHeight);

    // TODO: Adjust the layout to 80% of container width and hight
    const width  = Math.round(this.props.containerWidth*0.9);
    // const height = Math.round(this.props.containerHeight*0.9);
    let height = Math.round(width*0.75);
    if(height<=325) {
      height = 325;
    } else if (height>450) {
      height = 450;
    }

    console.log("width=" + width + ", height=" + height);

    const layout = this.props.layout;
    layout.width = width;
    layout.height = height;

    return (
        <div style={visualizationStyle}>

            <Plot style={plotStyle}
              data={this.props.data}
              layout={layout}
            />
        </div>
    );
  }
};

export default Dimensions()(Visualization);

/* 
            containerWidth={this.props.containerWidth}
            containerHeight={this.props.containerHeight}
*/

/*
  (function() {
  var d3 = Plotly.d3;
  var gd3 = d3.select("div[id='content']");
  var gd = gd3.node();

  Plotly.plot(gd, [{
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [5, 10, 2, 8],
    marker: {
      color: '#C8A2C8',
      line: {
        width: 2.5
      }
    }
  }], {
    title: 'Auto-Resize',
    font: {
      size: 16
    }
  });

  window.onresize = function() {
    Plotly.Plots.resize(gd);
    var window_height = window.innerHeight;
    var content_div_height = document.getElementById('content').offsetHeight;
    // workaround for bug in Plotly: when flexbox container gets smaller, graph does not shrink
    if (content_div_height > (window_height - 40)) {
      var svg_container = document.getElementById('content').getElementsByClassName('plot-container')[0].getElementsByClassName('svg-container')[0];
      svg_container.style.height = (window_height - 40) + 'px';
      Plotly.Plots.resize(gd);
    }
  };
  })();
*/
