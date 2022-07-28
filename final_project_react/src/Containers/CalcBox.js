import React, { useState } from "react";
import Header from "../Components/Header";
import MathForm from "../Components/MathForm";
import MathList from "../Components/MathList";

const CalcBox = () => {

    const [calculations, setCalculations] = useState(
        [
            {
                id: 1,
                numberOne: 2,
                operation: "*",
                numberTwo: 2
            }
        ]
    )


    const addCalculation = (submittedCalculation) => {
        submittedCalculation.id = Date.now();
        const updatedCalculation = [...calculations, submittedCalculation];
        setCalculations(updatedCalculation);
    }
    return (
        <div>
            <header id="header">
                <Header/>
            </header>
            <main id="mainForm">
                <MathForm onCalculationSubmit={(calculation) => addCalculation(calculation)}/>
            </main>

            <h2>Calculations: </h2>
            <MathList calculations={calculations}/>
            
        </div>
        
    )
}

export default CalcBox;