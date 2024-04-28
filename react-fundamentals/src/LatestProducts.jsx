import React from "react";
import Product from "./Product";

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

export default function LatestProducts() {
  return (
    <div>
      <h2>Latest Products</h2>
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
      <Product data={products[1]} />
      <Product data={products[2]} />
      <Product data={products[3]} />
      <Product data={products[4]} />
      
    </div>
  );
}
