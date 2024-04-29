/* Component */
// function Product(props) {   // props {data: { title:"",rating:"" }}
function Product({ data }) { // object destructuring
  let { thumbnail, title, rating, price } = data;
  return (
    <div className="product">
      <img src={thumbnail} />
      <p>
        {title} ( {rating} ){" "}
      </p>
      <p>${price}</p>
    </div>
  );
}

export default Product;
