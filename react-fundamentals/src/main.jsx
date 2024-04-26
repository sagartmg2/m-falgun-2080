import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Product from "./Product";

let title = " React fundamentals.";
let description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla perferendis sapiente molestias nesciunt delectus officia. Sapiente cum dolores recusandae, quae laudantium quam voluptas officiis! Nobis quae adipisci perferendis in";

let todaysDate = new Date().toString();

let products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    description: "lloarem ispusm is somth..a fasdf . ",
    rating: 4.69,
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    description: "lloarem ispusm is somth..a fasdf . ",
    rating: 4.44,
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    description: "lloarem ispusm is somth..a fasdf . ",
    rating: 4.09,
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
    description: "lloarem ispusm is somth..a fasdf . ",
    rating: 4.3,
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    price: 499,
    description: "lloarem ispusm is somth..a fasdf . ",
    rating: 4.09,
    thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>{title}</h1>
    <p>{description}</p>
    <p id="date" className="">
      {todaysDate}
    </p>
    <h2>Products</h2>
    {/* 
    <Product
      thumbnail={products[2].thumbnail}
      title={products[2].title}
      price={products[2].price}
      rating={products[2].rating}
      description ={products[1].description}
    /> */}


    <Product
      data={{
        id: 1,
        title: "iPhone 9",
        price: 549,
        description: "lloarem ispusm is somth..a fasdf . ",
        rating: 4.69,
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      }}
    />


    <Product data={products[1]} />  {/* <Product data={ { name:iphoneX ...... } } />  */}
    <Product data={products[2]} />
    <Product data={products[3]} />
    <Product data={products[4]} />

    {/* .map  */}
    

  </React.StrictMode>
);
