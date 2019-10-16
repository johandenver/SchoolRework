import React from "react";

function Math(props) {
    const {num1, operator, num2} = props;
    let value;
    switch (operator) {
        case "+":
            value = num1 + num2;
            break;
        case "-":
            value = num1 - num2;
            break;
        case "*":
            value = num1 * num2;
            break;
        case "/":
            value = num1 / num2;
            break;
        default:
            value = NaN;
        }
        return <div>{value}</div>
    
}

export default Math;