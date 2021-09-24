import React, { useState } from "react";

const Calculator = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [operatorMenu, setOperatorMenu] = useState('add');
  const [result, setResult] = useState('');

const calculate = (val1, operatorMenu, val2) => {
val1 = parseInt(val1)
val2 = parseInt(val2)

if (!isNaN(val1) || !isNaN(val2)) {
  switch (operatorMenu) {
  case "add":
  return val1 + val2
  case "subtract":
  return val1 - val2;
  case "multiply":
  return val1 * val2;
  case "divide":
  return val1 / val2;
  default:
}}}


  return (
    <>
    <section>
        <input type="text" onChange={event => setVal1(event.target.value)} value= {val1}/>
         <select name="operator" onChange={event => setOperatorMenu(event.target.value)} value={operatorMenu}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <input type="text" onChange={event => setVal2(event.target.value)} value= {val2}/>
         <button onClick={event => setResult(calculate(val1, operatorMenu, val2))}>=</button>
         <input type="text" onChange={event => setResult(event.target.value)} value={result} />
    </section>
    </>
);
};

export default Calculator;
