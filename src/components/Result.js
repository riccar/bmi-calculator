//Function based component Result that show the BMI result on the screen

import React from 'react';

//bmi is passed from the parent component
const Result = ({bmi}) => {

  if (!bmi) {
    return <div className="result">Calculating...</div>;
  }
  
  //Return a simple JSX div with calculated BMI 
  return (
    <div className="result">
      Your BMI is: {bmi}
    </div>
  );
};

export default Result;