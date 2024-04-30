/* 
    internally in react , 
        function useState(initialValue){
            // react -codes
            return [ initialValue, () =>{ console.log("function to change initialValue") } ]
        } 
*/


import { useState } from "react";

export default function Counter() {
  console.log("re-render");
  /* 
   let count = 100; // we cant make normal variable if we need to change UI on change of variable value
   */
  
  const [count, setCount] = useState(100);
  /*
    internally its compiled as 
    const [count, setCount] = [ 100, () =>{ console.log("function to change initialValue") } ]
  
  */ 

  function increment() {
    // count++;
    setCount(count+1);
  }

  return (
    <div>
      <h2>
        count: <span id="count-value">{count}</span>
      </h2>
      <button onClick={increment}>incrmeent</button>
    </div>
  );
}
