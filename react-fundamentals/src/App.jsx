import LatestProducts from "./LatestProducts";
import TrendingProducts from "./TrendingProducts";
import Todos from "./Todos";
import Counter from "./Counter"
import CounterNew from "./CounterNew";
import ProductsApi from "./ProductsApi";
import Login from "./Login";

let title = " copmponent lifecyles";

export default function App() {
 
  return (
    <>
      <h1 style={{textAlign:"center"}}>{title}</h1>
      {/* <TrendingProducts /> */}
      {/* <LatestProducts /> */}
      {/* <Counter/> */}
      {/* <CounterNew/> */}
      {/* <Todos /> */}
      <ProductsApi/>
      {/* <Login/> */}
      {/* theme change: light /dark */}

    </>
  );
}
