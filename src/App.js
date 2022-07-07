//importing the useState hooks from react for managing the state

import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  //putting all the operation sign together in a array
  const ops = ["/", "*", "+", "-", "."];

  //function for updating the ui of operation screen when someone enters the data for operaion if it is mathematicla operator and last entered data is also mathematical operator then nothing happen just return
  //if there is nothing to perform operation and if some one enter mathematical opearation then also nothing happens
  const updateCalc = (volue) => {
    if (
      (ops.includes(volue) && calc === "") ||
      (ops.includes(volue) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + volue);
    if (!ops.includes(volue)) {
      setResult(eval(calc + volue).toString());
    }
  };

  //creating html button elements from 1 to 9 and alse pass the onClick event handler which is updateCalc and passes the value of that button as a arguments

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  //function for calculating the entered operation I have used Eval function which is used when we need to evaluate mathematical expression
  //and managing the new state using the useState hooks when updated the new calculation
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  //handling the delete functionality when delete button is pressed and also managing the new state using useState hooks
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>X</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
