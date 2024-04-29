import LatestProducts from "./LatestProducts";
import TrendingProducts from "./TrendingProducts";
import Todos from "./Todos";
import Counter from "./Counter"

let title = " React state.";

export default function App() {
  return (
    <>
      <h1>{title}</h1>
      {/* <TrendingProducts /> */}
      {/* <LatestProducts /> */}
      <Counter/>
      <Todos />

      {/* theme change: light /dark */}

    </>
  );
}
