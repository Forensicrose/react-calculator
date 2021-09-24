import React, { useState } from "react"


const Calculator = () => {
  const [numberOne, setNumberOne] = useState('')
  const [numberTwo, setNumberTwo] = useState('')
  const [operatorMenu, setOperatorMenu] = useState('add')
  const [answer, setAnswer] = useState('')

const calculate = (numberOne, operatorMenu, numberTwo) => {
numberOne = parseInt(numberOne)
numberTwo = parseInt(numberTwo)

if (!isNaN(numberOne) || !isNaN(numberTwo)) {
  switch (operatorMenu) {
  case "add":
  return numberOne + numberTwo
  case "subtract":
  return numberOne - numberTwo
  case "multiply":
  return numberOne * numberTwo
  case "divide":
  return numberOne / numberTwo
  default: 
  return 'Enter number and operators Only'
}} else {
  return 'Err'
}}


  return (
    <>
    <section className="operatorList">
        <input type="text" className="val1" onChange={event => setNumberOne(event.target.value)} value= {numberOne}/>
         <select className="menu" onChange={event => setOperatorMenu(event.target.value)} value={operatorMenu}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <input type="text" className="val2" onChange={event => setNumberTwo(event.target.value)} value= {numberTwo}/>
        <button className="btn" onClick={() => setAnswer(calculate(numberOne, operatorMenu, numberTwo))}>Equals</button>
         <input type="text" className="answer" onChange={event => setAnswer(event.target.value)} value={answer} />
    </section>
    </>
);
};

export default Calculator;
