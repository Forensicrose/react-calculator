import React, { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
    <section>
        <input type="text" onChange={(event) => setInput1(event.target.value)}></input>
        <input type="text" onChange={(event) => setInput2(event.target.value)}></input>
    </section>
    </>
);
};

export default Calculator;
