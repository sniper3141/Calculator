import React from "react";
import MathItem from "./MathItem";

const calculation = ({calculations}) => {

  const calculationNodes = calculations.map(calculation => {
    return (
      <MathItem numberOne={calculation.numberOne} key={calculation.id} numberTwo={calculation.numberTwo}>{calculation.operation}</MathItem>
    );
  });

  return(
    <>
      {calculationNodes}
    </>
  )

}

export default calculation;