import React, { Component } from 'react';

import './App.css';
import Header from '../components/Header/Header';
// import Menu from '../components/Menu/Menu';
import InputNumber from '../components/Input/InputNumber';
// import Button from '../components/Input/Button';
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
    growth: {label:'Growth',value:5},
    years: {label:'Years',value:10},
    amountData: [],
    yieldData: [],
    amountLayout: {
      width: 500,
      height: 300,
      title: 'Amount Visualization'
    },
    yieldLayout: {
      width: 500,
      height: 300,
      title: 'Yield Visualization'
    }
  };

  constructor(props) {
    // Props contains the title!
    // Earlier all component state was created in the constructor.
    // Always call super(props) first in the constructor.
    super(props);
    console.log("this.state.applicationTitle=" + this.state.applicationTitle);
    console.log("props.title=" + props.title);

    let headers = [
      { id:'1',text:'Logo'},
      { id:'2',text:''},
      { id:'3',text:'Info'}
    ];
    headers[1].text = props.title;
    this.state.headers = headers;

    const data =
        this.dividendGrowthCalculation(this.state.amount.value,
                                      this.state.years.value,
                                      this.state.dividend.value,
                                      this.state.growth.value);

    this.state.amountData = data.amountData;
    this.state.yieldData  = data.yieldData;
  }

  amountHandler = (event) => {
    const amount = {...this.state.amount};
    amount.value = event.target.value;
    this.setState((state) => ({amount: amount}));
    const data =
        this.dividendGrowthCalculation(amount.value,
                                       this.state.years.value,
                                       this.state.dividend.value,
                                       this.state.growth.value);
    this.setState({amountData: data.amountData});
    this.setState({yieldData: data.yieldData});
  };

  dividendHandler = (event) => {
    const dividend = {...this.state.dividend};
    dividend.value = event.target.value;
    this.setState((state) => ({dividend: dividend}));
    const data =
        this.dividendGrowthCalculation(this.state.amount.value,
                                       this.state.years.value,
                                       dividend.value,
                                       this.state.growth.value)
    this.setState({amountData: data.amountData});
    this.setState({yieldData: data.yieldData});
  };

  growthHandler = (event) => {
    const growth = {...this.state.growth};
    growth.value = event.target.value;
    this.setState((state) => ({growth: growth}));
    const data =
        this.dividendGrowthCalculation(this.state.amount.value,
                                       this.state.years.value,
                                       this.state.dividend.value,
                                       growth.value)
    this.setState({amountData: data.amountData});
    this.setState({yieldData: data.yieldData});
};

  yearsHandler = (event) => {
    const years = {...this.state.years};
    years.value = event.target.value;
    this.setState((state) => ({years: years}));
    const data =
        this.dividendGrowthCalculation(this.state.amount.value,
                                       years.value,
                                       this.state.dividend.value,
                                       this.state.growth.value)
    this.setState({amountData: data.amountData});
    this.setState({yieldData: data.yieldData});
  };

  dividendGrowthCalculation = (a,y,d,g) => {
    // Calculation of dividend growth and create the data in a format
    // that fits the plotly visualization package.

    const AMOUNT    = parseInt(a);
    const YEARS     = parseInt(y);
    const DIVIDEND  = parseInt(d);
    const GROWTH    = parseInt(g);

    let amount    = AMOUNT;
    let dividend  = DIVIDEND/100;
    let growth    = GROWTH/100;

    console.log("amount=" + amount + ",years=" + YEARS + ",dividend=" + dividend + ",growth=" + growth);

    const xArray        = [];
    const yAmountArray  = [];
    const yYieldArray   = [];

    xArray.push(0);
    yAmountArray.push(amount);
    yYieldArray.push(dividend*100);

    for(let index = 1; index <= YEARS; index++) {
      // Dividend growth calculation
      let dividendGrowth = dividend*growth; // 0.04*0.03 = 0.0012
      console.log("dividendGrowth=" + dividendGrowth);
      
      dividend = dividend + dividendGrowth;
      console.log("dividend=" + dividend);

      // Dividend calculation
      let dividendAmount = Math.round((amount*dividend)*100)/100;
      console.log("dividendAmount=" + dividendAmount);

      // Amount calculation
      amount = amount + dividendAmount;
      amount = Math.round(amount*100)/100;
      console.log("amount=" + amount);

      const yieldInitAmountBase = dividendAmount/AMOUNT;
      console.log("yieldInitAmountBase=" + yieldInitAmountBase);

      const yieldInitAmount = Math.round(yieldInitAmountBase*10000)/100;
      console.log("yieldInitAmount=" + yieldInitAmount);

      xArray.push(index);
      yAmountArray.push(amount);
      yYieldArray.push(yieldInitAmount);
    }

    console.log("yAmountArray=" + yAmountArray);
    console.log("yYieldArray=" + yYieldArray);

    const amountData = [
      {
        type: 'bar',
        x: xArray,
        y: yAmountArray
      }
    ]

    const yieldData = [
      {
        type: 'bar',
        x: xArray,
        y: yYieldArray
      }
    ]

    const data = {
        amountData: amountData,
        yieldData: yieldData
    } 
    
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
        </div>

        <Visualization data={this.state.amountData} layout={this.state.amountLayout}/>
        <Visualization data={this.state.yieldData} layout={this.state.yieldLayout}/>

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
