import React, { Component } from 'react';

import './App.css';
import Header from '../components/Header/Header';
// import Menu from '../components/Menu/Menu';
import InputNumber from '../components/Input/InputNumber';
import Button from '../components/Input/Button';
// import OutputNumber from '../components/Output/OutputNumber';
import Visualization from '../components/Output/Visualization';
import Footer from '../components/Footer/Footer';
import Aux from '../hoc/Auxiliary/Auxiliary';
import withClass from '../hoc/withClass';

const appStyle = {
  padding: '0px 0px',
  marging: '0px 0px'
};

class App extends Component {
  state = {
    applicationTitle: 'Dividend Growth Visualization',
    headers: [],
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
    // TODO: The props.title from the index.js has stoped working!!!
    console.log("this.state.applicationTitle=" + this.state.applicationTitle);
    console.log("props.title=" + props.title);

    let headers = [
      { id:'1',text:'Logo'},
      { id:'2',text:''},
      { id:'3',text:'Info'}
    ];
    headers[1].text = props.title;
    this.state.headers = headers;

    this.state.data = this.dividendGrowthCalculation();
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
    this.setState((state) => ({years: years}));
    // this.setState((state) => ({data: this.dividendGrowthCalculation()}));
    //   {data: this.dividendGrowthCalculation()});
  };

  updateHandler = (event) => {
    const data = this.dividendGrowthCalculation();
    this.setState({data: data});
  }

  dividendGrowthCalculation = () => {
    // TODO: Do the calculation of dividend growth in the form that is
    // fits the plotly visualization package.

    const YEARS = this.state.years.value;
    const AMOUNT = this.state.amount.value;
    const DIVIDEND = this.state.dividend.value;
    const GROWTH = this.state.growth.value;
    
    let amount = AMOUNT;
    let dividend = DIVIDEND/100;
    let growth = GROWTH/100;

    const xArray = [];
    const yArray = [];

    xArray.push(0);
    yArray.push(amount);
    for(let index = 1; index <= YEARS; index++) {
        //only dividend calculation
      amount = amount + (amount*dividend);

      xArray.push(index);
      yArray.push(amount);
    }

    const data = [
      {
        type: 'bar',
        x: xArray,
        y: yArray
      }
    ]

    return data;
  }

  /* <Menu menus={this.state.menus}/> */

  render() {
    return (
      <Aux>
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
          <Button onClick={this.updateHandler}
            name={'Update visualization'} />
        </div>

        <Visualization data={this.state.data} layout={this.state.layout}/>

        <Footer footers={this.state.footers}/>
      </Aux>
    );
  }
}

/*
        <div>
          <OutputNumber label={this.state.amount.label} value={this.state.amount.value} />
          <OutputNumber label={this.state.dividend.label} value={this.state.dividend.value} />
          <OutputNumber label={this.state.growth.label} value={this.state.growth.value} />
          <OutputNumber label={this.state.years.label} value={this.state.years.value} />
        </div>

*/
export default App; // withClass(App, appStyle);
