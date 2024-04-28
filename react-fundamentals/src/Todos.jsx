let todosData = ["html", "css", "js", "react", "express"]; // api data


// let mappedTodos = [ <li>html</li>,  <li>css</li> ,<li>js</li>]
let mappedTodos = todosData.map((element,index) => {
  return <li key={index}>{element}</li>;
});

export default function Todos() {
  return (
    <div>
      <h2>Todos List</h2>
      <ul>
        {todosData.slice(0,3).map((el,index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>

      {/* <ul>{mappedTodos}</ul> */}

    </div>
  );
}
