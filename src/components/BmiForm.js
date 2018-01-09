//Class based component BmiForm. Form to request weight and height to calculate BMI

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
      weight: 75,
      height: 175
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
   
    this.setState({
      [name]: value
    })
    
    this.props.OnSubmitForm(this.state.weight, this.state.height);
  }
  
  //Returns a controlled component
  render() {
    //as in classic html use the onChange property of the element to define the onChange function and provide the this.<functionName> defined in the class (within curly bracers)
    return (
      <div>
        <label>
          Your weight:
          <input
            name="weight"
            type="number" 
            value={this.state.weight}
            //event.target.value has the input value
            onChange={this.handleInputChange} />
        </label>
        <label>
          Your height:
          <input
            name="height" 
            type="number" 
            value={this.state.height}
            //event.target.value has the input value
            onChange={this.handleInputChange} />
        </label>
          
      </div>
    );
  }

  //event handler on + <ElementName> + <EventName>. Add the event parameter
  onInputChange(term) {
    //{term} equals to {term: term}
    this.setState({term});
    this.props.OnSearchTermChange(term);
  }
}

export default BmiForm;