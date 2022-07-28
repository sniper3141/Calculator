import React from "react";

const Calculation = ({numberOne, numberTwo, children}) => {

    
    let answer = 0;
    if (children === "+"){
        answer = parseInt(numberOne) + parseInt(numberTwo);
    }
    else if (children === "*"){
        answer = numberOne * numberTwo;
    }
    else if (children === "/"){
        answer = numberOne / numberTwo;
    }
    else if (children === "-"){
        answer = numberOne - numberTwo;
    }

    


    return(
        <>
        <h4>
            {numberOne} {children} {numberTwo} = {Math.round(answer)}</h4>
        </>
    )

}

export default Calculation;