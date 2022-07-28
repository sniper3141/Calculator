import React, {useState} from "react";

const MathForm = ({onCalculationSubmit}) => {

    const [numberOne, setNumberOne] = useState("");
    const [operator, setOperator] = useState("");
    const [numberTwo, setNumberTwo] = useState("");


    const handleNumberOneChange = (event) => {
        setNumberOne(event.target.value);
        console.log(event.target.value);
    }

    const handleOperatorChange = (event) => {
        setOperator(event.target.value);
        console.log(event.target.value);
    }

    const handleNumberTwoChange = (event) => {
        setNumberTwo(event.target.value);
        console.log(event.target.value);
    }

    const handleCalculationSubmit = (event) => {
        event.preventDefault()

        const numberOneToSubmit = numberOne;
        const operatorToSubmit = operator;
        const numberTwoToSubmit = numberTwo;

        if (!operatorToSubmit){
            return
        }

        onCalculationSubmit({
            numberOne: numberOneToSubmit,
            operation: operatorToSubmit,
            numberTwo: numberTwoToSubmit
        })

        setNumberOne("")
        setOperator("")
        setNumberTwo("")
    }


    return (
        <form id="mathForm" onSubmit={handleCalculationSubmit}>
            <section id="partOneOfForm">
                <label htmlFor="number" className="lable"> First Number: </label>

                <input 
                type="number" 
                placeholder="Enter a number..."
                className="input"
                onChange={handleNumberOneChange}
                value={numberOne}></input>
            </section>

            <section id="partTwoOfForm">
                <label htmlFor="operator" className="lable"> Operator: </label>

                <input 
                type="text" 
                placeholder="Enter an operator..."
                className="input"
                onChange={handleOperatorChange}
                value={operator}></input>
            </section>

            <section id="partThreeOfForm">
                <label htmlFor="number" className="lable"> Second Number: </label>

                <input 
                type="number" 
                placeholder="Enter a number..."
                className="input"
                onChange={handleNumberTwoChange}
                value={numberTwo}></input>
            </section>

            <input type="submit" value="calculate" id="submitButton"></input>
        </form>
    )
}

export default MathForm;