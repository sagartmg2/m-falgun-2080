import { useState } from "react";

export default function Todos() {
  const [newInput, setNewInput] = useState("");
  const [todosData, setTodosData] = useState([
    {
      title: "html",
      status: false,
    },
    {
      title: "css",
      status: true,
    },
    {
      title: "js",
      status: false,
    },
  ]);

  function addNewTodo(e) {
    e.preventDefault();
    console.log(e.target.title.value);

    /* 
    // todosData.push("new-element"); // cant change react state variable directly
      let temp = todosData // refernce variable
      temp.push("js")
    */

    let temp = [...todosData]; // spread opertor
    let newData = e.target.title.value
    /* check if newData already exists in todosData[] */
    temp.push({
      status: false,
      title: newData
    });

     
    // console.log(temp);
    // setTodosData( ["html","css","js"])
    setTodosData(temp);
    e.target.title.value = "";
  }

  function deleteTodo(deleteableIndex) {
    console.log("delete ...", deleteableIndex);
    let temp = [...todosData];
    /* build your logic to delete respecive index from todosData array */

    // temp.splice(index,1)

    /* 
    temp = temp.filter((el, idx) => {
      if (index == idx) {
        return false;
      }
      return true;
    }); */

    /*
      temp = temp.filter((el, idx) => {
        if (deleteableIndex != idx) {
          return true;
        }
      });
     */

    temp = temp.filter((el, idx) => deleteableIndex !== idx);
    setTodosData(temp);
  }

  // function changeInputFieldValue(e){
  //   setNewInput(e.target.value)
  // }

  function toggleStatus(index) {
    let temp = [...todosData];
    temp[index].status = !temp[index].status;
    setTodosData(temp);
  }
  
  return (
    <div>
      <h2>Todos List</h2>
      <form onSubmit={addNewTodo}>
        {/* <input value={newInput} onChange={changeInputFieldValue} required name="title" type="text" /> */}
        <input
          value={newInput}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
          required
          name="title"
          type="text"
        />
        <button>add</button>
      </form>
      <br />

      {JSON.stringify(todosData)}

      <ul style={{ listStyle: "none" }}>
        {todosData.map((el, index) => {
          return (
            <li key={index}>
              <input
                checked={el.status}
                onChange={(e) => {
                  // console.log(e.target.checked);
                  toggleStatus(index);
                }}
                type="checkbox"
              />
              {/* <span className={ "line-through"} >{el.title}</span> */}
              <span className={el.status ? "line-through" :"" } >{el.title}</span>
              {/* <span className={`${el.status? "line-through" : "" }  other-class1 other-class-2   `}>{el.title}</span> */}
              <button
                type="button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
