//Import react so it can be used inside this module. The transpiler will take care of provide access to it. 
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BmiForm from './BmiForm';
import Result from './Result';

class BmiCalculator extends Component {

  constructor(props) {
    super(props);

    //Initialize component state 
    this.state = { 
      bmi: null
    };

    //showing default bmi 
    this.CalculateBmi(75, 175);
    
  }

  CalculateBmi(weight, height) {
    var bmi =  weight / height;
    bmi = bmi / height;
  
    this.setState({bmi});
  }

  render() {
    return (
      <div className="bmi-calculator">
        <BmiForm OnSubmitForm={this.CalculateBmi} />
        <Result bmi={this.state.bmi} />
      </div>
    );
  }
  
}

ReactDOM.render(<BmiCalculator />, document.querySelector('.container'));
