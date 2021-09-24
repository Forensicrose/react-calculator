import React, { useState } from "react";

const Calculator = () => {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [operatorMenu, setOperatorMenu] = useState('add');
  const [answer, setAnswer] = useState('');

const calculate = (numberOne, operatorMenu, numberTwo) => {
numberOne = parseInt(numberOne)
numberTwo = parseInt(numberTwo)

if (!isNaN(numberOne) || !isNaN(numberTwo)) {
  switch (operatorMenu) {
  case "add":
  return numberOne + numberTwo
  case "subtract":
  return numberOne - numberTwo;
  case "multiply":
  return numberOne * numberTwo;
  case "divide":
  return numberOne / numberTwo;
  default: 
  return 'make valid entry'
}} else {
  return 'Error!'
}}


  return (
    <>
    <section>
        <input type="text" onChange={event => setNumberOne(event.target.value)} value= {numberOne}/>
         <select onChange={event => setOperatorMenu(event.target.value)} value={operatorMenu}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <input type="text" onChange={event => setNumberTwo(event.target.value)} value= {numberTwo}/>
        <button onClick={_event => setAnswer(calculate(numberOne, operatorMenu, numberTwo))}>=</button>
         <input type="text" onChange={event => setAnswer(event.target.value)} value={answer} />
    </section>
    </>
);
};

export default Calculator;
