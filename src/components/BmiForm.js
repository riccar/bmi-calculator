//Class based component BmiForm. Form to request weight and height to calculate BMI

//Import lodash to delay the callback function so the app waits until the user type the values in the form
import _ from 'lodash';
//Component within Curly brackets means import React, create a Component variable and initialize it with the React.Component property
import React, { Component } from 'react';

class BmiForm extends Component {

  //State is initialized in the constructor method as follows
  constructor(props) {

    //execute parent constructor. 
    super(props);

    //Initializing the state by creating a new object and assign it to the state attribute of the class
    //Add the property term to the object as empty, to record the search term that is the value typed into the text box
    this.state = { 
      weight: 75,//props.weight,
      height: 175//props.height
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    var name = target.name;
    var value = target.value;
   
    if (name == 'weight' && value <= 0) value = "";
    if (name == 'height' && value <= 0) value = "";

    this.setState({
      [name]: value
    })
    console.log(this.state);

    //this.props.OnSubmitForm(this.state.weight, this.state.height);
  }

  handleSubmit(event) {
    
    const target = event.target;
    const name = target.name;
    const value = target.value;
   
    this.setState({
      [name]: value
    })
    console.log(this.state);

    this.props.OnSubmitForm(this.state.weight, this.state.height);
    event.preventDefault();
  }
  
  //Returns a controlled component
  render() {
    //as in classic html use the onChange property of the element to define the onChange function and provide the this.<functionName> defined in the class (within curly bracers)
    return (
      <div className="bmi-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Your weight in kg:
            <input
              name="weight"
              type="number"
              step=".01"
              required={true}
              value={this.state.weight}
              //event.target.value has the input value
              onChange={this.handleInputChange} />
          </label>
          <label>
            Your height in cm:
            <input
              name="height" 
              type="number"
              step=".01"
              required={true} 
              value={this.state.height}
              //event.target.value has the input value
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>  
      </div>
    );
  }

}

export default BmiForm;