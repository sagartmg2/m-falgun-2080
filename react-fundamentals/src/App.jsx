import LatestProducts from "./LatestProducts";
import TrendingProducts from "./TrendingProducts";
import Todos from "./Todos";

let title = " React fundamentals.";

export default function App() {
  return (
    <>
      <h1>{title}</h1>
      <TrendingProducts />
      <LatestProducts />
      <Todos />
    </>
  );
}
