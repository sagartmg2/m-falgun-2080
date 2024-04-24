import React from "react";
import ReactDOM from "react-dom/client";

let title = " React fundamentals.";
let description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla perferendis sapiente molestias nesciunt delectus officia. Sapiente cum dolores recusandae, quae laudantium quam voluptas officiis! Nobis quae adipisci perferendis in";

let today = new Date().toString();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>{title} </h1>
    <p>{today}</p>
    <p>{description}</p>
  </React.StrictMode>
);
