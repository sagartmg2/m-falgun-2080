import React, { useState } from "react";

export default function CounterNew() {
  // const  countValue = 100;
  let [countValue, setCountValue] = useState(100); //  [ 100, () =>{ mutator function } ]

  const increment = () => {
    console.log("increment");
    // setCountValue(countValue + 1);
    setCountValue((prev) =>{
      return prev + 1
    });
  };

  const decrement = () => {
    console.log("decrement");
    setCountValue(countValue - 1);
  };

  console.log("counter- render/load");
  return (
    <div>
      <p>count:{countValue}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>dercemnt</button>
    </div>
  );
}
