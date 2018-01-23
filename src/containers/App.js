/* global Plotly:true */

import React, { Component } from 'react';

import './App.css';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import InputNumber from '../components/Input/InputNumber';
import OutputNumber from '../components/Output/OutputNumber';
import Visualization from '../components/Output/Visualization';
import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    applicationName: 'Dividend Growth Visualization',
    footerText1: 'Footer text one',
    footetText2: 'Footer text two',
    footers: [
      { id:'1',text:'Footer text one'},
      { id:'2',text:'Footer text two'},
      { id:'3',text:'Footer text tree'}
    ],
    menus : [
      { id:'m1',text:'menu1'},
      { id:'m2',text:'menu2'}
    ],
    amount: {label:'Amount',value:10000},
    dividend: {label:'Dividend',value:3},
    growth: {label:'Growth',value:4},
    years: {label:'Years',value:5},
    data: [
      {
        type: 'scatter',
        mode: 'lines+points',
        x: [1, 2, 3],
        y: [2, 6, 3],
        marker: {color: 'red'}
      },
      {
        type: 'bar',
        x: [1, 2, 3],
        y: [2, 5, 3]
      }
    ],
    layout:{
      width: 400,
      height: 400,
      title: 'A Fancy Plot'
    }
  };

  constructor(props) {
    // Props contains the title!
    // Earlier all component state was created in the constructor.
    // Always call super(props) first in the constructor.
    super(props);
    let headers = [
      { id:'1',text:'Company'},
      { id:'2',text:''},
      { id:'3',text:'Info'}
    ];
    headers[1].text = props.title;
    this.state.headers = headers;
  }

  amountHandler = (event) => {
    const amount = {...this.state.amount};
    amount.value = event.target.value;
    this.setState({amount: amount});
    // TODO: Calculate new data
    // TODO: Update this.state.data
  };

  dividendHandler = (event) => {
    const dividend = {...this.state.dividend};
    dividend.value = event.target.value;
    this.setState({dividend: dividend});
    // TODO: Calculate new data
    // TODO: Update this.state.data
  };

  growthHandler = (event) => {
    const growth = {...this.state.growth};
    growth.value = event.target.value;
    this.setState({growth: growth});
      // TODO: Calculate new data
    // TODO: Update this.state.data
};

  yearsHandler = (event) => {
    const years = {...this.state.years};
    years.value = event.target.value;
    this.setState({years: years});
    // TODO: Calculate new data
    // TODO: Update this.state.data
  };

  dividendGrowthCalculation = () => {
    // TODO: Do the calculation of dividend growth in the form that is
    // fits the plotly visualization package.

  }

  /* <Menu menus={this.state.menus}/> */

  render() {
    return (
      <div>
        <div>
          <Header headers={this.state.headers}/>

          <div>
            <InputNumber
              onChange={this.amountHandler}
              label={this.state.amount.label}
              value={this.state.amount.value}/>
            <InputNumber
              onChange={this.dividendHandler}
              label={this.state.dividend.label}
              value={this.state.dividend.value}/>
            <InputNumber
              onChange={this.growthHandler}
              label={this.state.growth.label}
              value={this.state.growth.value}/>
            <InputNumber
              onChange={this.yearsHandler}
              label={this.state.years.label}
              value={this.state.years.value}/>
          </div>

          <div>
            <OutputNumber label={this.state.amount.label} value={this.state.amount.value} />
            <OutputNumber label={this.state.dividend.label} value={this.state.dividend.value} />
            <OutputNumber label={this.state.growth.label} value={this.state.growth.value} />
            <OutputNumber label={this.state.years.label} value={this.state.years.value} />
          </div>

          <Visualization data={this.state.data} layout={this.state.layout}/>

          <Footer footers={this.state.footers}/>
        </div>
      </div>
    );
  }
}

export default App;
