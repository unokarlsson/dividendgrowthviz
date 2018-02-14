/* global Plotly:true */

import React from 'react';
// import Aux from '../../hoc/Auxiliary/Auxiliary';

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


const Plot = createPlotlyComponent(Plotly);

const visualization =  (props) => {

    const visualizationStyle = {
      // width: '90%',
      // height: '90%',
      display: 'flex',
      justifyContent: 'center',
      margin: '10px'
    };

    const plotStyle = {
      backgroundColor: '#E8F5E9'
    }

    return (
        <div style={visualizationStyle}>
            <Plot style={plotStyle}
              data={props.data}
              layout={props.layout}
            />
        </div>
    );
};

export default visualization;

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
