import React, { Component } from 'react';

import './App.css';
import Header from '../components/Header/Header';
// import Menu from '../components/Menu/Menu';
// import InputNumber from '../components/Input/InputNumber';
import InputRange from '../components/Input/InputRange';
// import Button from '../components/Input/Button';
// import OutputNumber from '../components/Output/OutputNumber';
import Visualization from '../components/Output/Visualization';
import Footer from '../components/Footer/Footer';
import InputDropdown from '../components/Input/InputDropdown';
// import Aux from '../hoc/Auxiliary/Auxiliary';

class App extends Component {
  state = {
    applicationTitle: '',
    footers: [
      { id:'1',text:'By Uno Karlsson'},
      { id:'2',text:'uno.carlsson@gmail.com'},
      { id:'3',text:'http://www.unokarlsson.com'}
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
      title: 'Amount Visualization',
      xaxis: {
        title: 'Years',
        titlefont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      yaxis: {
        title: 'Accumulated Amount (Currency)',
        titlefont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      // paper_bgcolor: 'rgba(165,214,167,1)',
      // plot_bgcolor: 'rgba(165,214,167,1)',
      paper_bgcolor: 'rgba(200,230,201,1)',
      plot_bgcolor: 'rgba(200,230,201,1)',
      // autosize: true,
      width: 500,
      height: 300
    },
    yieldLayout: {
      title: 'Yield Visualization',
      xaxis: {
        title: 'Years',
        titlefont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      yaxis: {
        title: 'Yield on Initial Amount (%)',
        titlefont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      paper_bgcolor: 'rgba(200,230,201,1)',
      plot_bgcolor: 'rgba(200,230,201,1)',
      // autosize: true,
      width: 500,
      height: 300
    }
  };

  constructor(props) {
    // Props contains the title!
    // Earlier all component state was created in the constructor.
    // Always call super(props) first in the constructor.
    super(props);
    
    console.log("props.title=" + props.title);
    this.state.applicationTitle = props.title;
    console.log("this.state.applicationTitle=" + this.state.applicationTitle);

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

    const AMOUNT    = parseInt(a,10);
    const YEARS     = parseInt(y,10);
    const DIVIDEND  = parseInt(d,10);
    const GROWTH    = parseInt(g,10);

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
        marker: {color: 'rgb(255, 152, 0)'},
        x: xArray,
        y: yAmountArray
      }
    ]

    const yieldData = [
      {
        type: 'bar',
        marker: {color: 'rgb(255, 152, 0)'},
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
      <div class='Main'>
        <Header title={this.state.applicationTitle}/>

        <div class='MainVizStyle'>
          <Visualization data={this.state.amountData} layout={this.state.amountLayout}/>
        </div>  
        <div  class='MainVizStyle'>      
          <Visualization data={this.state.yieldData} layout={this.state.yieldLayout}/>
        </div>

        <div class='MainControlStyle'>
          <div class='ControlStyle'>
            <InputDropdown
              onChange={this.amountHandler}
              label={this.state.amount.label}
              value={this.state.amount.value}
              min={10000}
              max={1000000}
              step={10000}/>
            <InputDropdown
              onChange={this.dividendHandler}
              label={this.state.dividend.label}
              value={this.state.dividend.value}
              min={0}
              max={10}
              step={0.1}/>
          </div>

          <div class='ControlStyle'>
            <InputRange
              onChange={this.yearsHandler}
              label={this.state.years.label}
              value={this.state.years.value}/>
            <InputDropdown
              onChange={this.growthHandler}
              label={this.state.growth.label}
              value={this.state.growth.value}
              min={0}
              max={25}
              step={1}/>
          </div>
          

        </div>

        <Footer footers={this.state.footers}/>
      </div>
    );
  }
}

/*

            <InputNumber
              onChange={this.dividendHandler}
              label={this.state.dividend.label}
              value={this.state.dividend.value}/>

        <OutputNumber label={this.state.years.label} value={this.state.years.value} />

          <InputNumber
            onChange={this.yearsHandler}
            label={this.state.years.label}
            value={this.state.years.value}/>

        <div>
          <OutputNumber label={this.state.amount.label} value={this.state.amount.value} />
          <OutputNumber label={this.state.dividend.label} value={this.state.dividend.value} />
          <OutputNumber label={this.state.growth.label} value={this.state.growth.value} />
          <OutputNumber label={this.state.years.label} value={this.state.years.value} />
        </div>
*/

export default App;
