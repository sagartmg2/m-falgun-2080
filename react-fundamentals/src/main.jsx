import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

let title = " React fundamentals.";
let description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla perferendis sapiente molestias nesciunt delectus officia. Sapiente cum dolores recusandae, quae laudantium quam voluptas officiis! Nobis quae adipisci perferendis in";

let todaysDate = new Date().toString();

let products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    rating: 4.69,
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    rating: 4.44,
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    rating: 4.09,
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
    rating: 4.3,
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    price: 499,
    rating: 4.09,
    thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
  },
];

/* Component */
function Product() {
  return (
    <div className="product">
      <img src={products[0].thumbnail} />
      <p>
        {products[0].title} ( {products[0].rating} ){" "}
      </p>
      <p>${products[0].price}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{todaysDate}</p>

    <h2>Products</h2>

    
    {/* make these dynamic. */}
    {/* research: passing props in react */}

    <Product/> 
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    

   {/*  <div className="product">
      <img src={products[1].thumbnail} />
      <p>
        {products[1].title} ( {products[1].rating} ){" "}
      </p>
      <p>${products[1].price}</p>
    </div>

    <div className="product">
      <img src={products[2].thumbnail} />
      <p>{products[2].title}</p>
      <p>${products[2].price}</p>
    </div>

    <div className="product">
      <img src={products[3].thumbnail} />
      <p>{products[2].title}</p>
      <p>${products[2].price}</p>
    </div>

    <div className="product">
      <img src={products[4].thumbnail} />
      <p>{products[2].title}</p>
      <p>${products[2].price}</p>
    </div> */}
  </React.StrictMode>
);
