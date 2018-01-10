
//Import react so it can be used inside this module. The transpiler will take care of provide access to it. 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BmiForm from './BmiForm';
import Result from './Result';

//Main application class
class BmiCalculator extends Component {

  constructor(props) {
    super(props);

    //Initialize component state 
    this.state = { bmi: null };

  }

  componentDidMount() {
    //showing default bmi 
    this.CalculateBmi(75, 175);
  }

  CalculateBmi(weight, height) {
    var bmi =  Math.pow((height / 100), 2);
    bmi = weight / bmi;
    this.setState({bmi: bmi});
  }

  render() {

    return (
      <div className="bmi-calculator group">
        Body Max Index (BMI) calculator
        <BmiForm OnSubmitForm={(width, height) => this.CalculateBmi(width, height)} />
        <Result bmi={Math.round(this.state.bmi * 100) / 100} />
      </div>
    );
  }
  
}

ReactDOM.render(<BmiCalculator />, document.querySelector('.container'));
