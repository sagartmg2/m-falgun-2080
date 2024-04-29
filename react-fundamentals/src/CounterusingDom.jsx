import CountValue from "./CountValue";

export default function Counter() {
  console.log("render");
  let count = 100;
  //

  function increment() {
    document.getElementById("count-value").innerText = ++count;
    count++;
    console.log("increment.", count);
  }

  return (
    <div>
      <h2>
        count: <span id="count-value">{count}</span>;
      </h2>
      <button onClick={increment}>incrmeent</button>
    </div>
  );
}
