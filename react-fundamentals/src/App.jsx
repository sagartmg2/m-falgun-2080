import LatestProducts from "./LatestProducts";
import TrendingProducts from "./TrendingProducts";
import Todos from "./Todos";
import Counter from "./Counter"
import CounterNew from "./CounterNew";

let title = " React state.";

export default function App() {
 
  return (
    <>
      <h1 style={{textAlign:"center"}}>{title}</h1>
      {/* <TrendingProducts /> */}
      {/* <LatestProducts /> */}
      {/* <Counter/> */}
      {/* <CounterNew/> */}
      <Todos />

      {/* theme change: light /dark */}

    </>
  );
}
