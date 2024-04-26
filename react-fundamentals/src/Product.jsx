/* Component */
function Product(props) {  
  return (
    <div className="product">
      <img src={props.data.thumbnail} />
      <p>
        {props.data.title} ( {props.data.rating} ){" "}
      </p>
      <p>${props.data.price}</p>
    </div>
  );
}

export default Product;
