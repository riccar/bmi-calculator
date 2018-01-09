//Function based component Result that show the BMI result on the screen

import React from 'react';

//bmi is passed from the parent component
const Result = ({bmi}) => {

  if (!bmi) {
    return <div>Calculating...</div>;
  }
  
  //Return a simple JSX div with calculated BMI 
  return (
    <div className="result">
      <p>Your BMI is: {bmi}</p>
    </div>
  );
};

export default Result;