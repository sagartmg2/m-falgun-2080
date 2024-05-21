import React from "react";

export default function Todos() {
/* 
falsyvalues   null undefined false "" 0 NaN */

  let todos = [
    { _id: "6645d6872e77b9df371d46bc", title: "html" },
    {
      _id: "6645d6c82e77b9df371d46bd",
      title: "css",
      status: false,
    },
    {
      _id: "6645d6c82e77b9df371d46be",
      title: "js",
      status: false,
    },
    {
      _id: "6647234852155a656d04d172",
      name: "express",
      status: "false",
    },
    {
      _id: "6647234852155a656d04d1722",
      topic: "express",
      status: "false",
    },
  ];
  return (
    <div>
      <h1>todos</h1>
      <ul>
        {todos.map((el) => {
          return <li>{el.title}{el.name}{el.topic} {el.status ? "✔" : "❌"}</li> 
        })}
      </ul>
    </div>
  );
}
