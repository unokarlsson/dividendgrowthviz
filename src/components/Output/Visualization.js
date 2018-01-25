/* global Plotly:true */

import React from 'react';
import Aux from '../../hoc/Aux';

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
    return (
        <Aux>
            <p>Visualization with plotly</p>
            <Plot
              data={props.data}
              layout={props.layout}
            />
        </Aux>
    );
};

export default visualization;
