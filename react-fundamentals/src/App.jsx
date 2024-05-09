import LatestProducts from "./LatestProducts";
import TrendingProducts from "./TrendingProducts";
import Todos from "./Todos";
import Counter from "./Counter"
import CounterNew from "./CounterNew";
import ProductsApi from "./ProductsApi";
import Login from "./Login";
import ProductSearch from "./ProductSearch";
import GoogleTabs from "./GoogleTabs";
import ChangeTheme from "./ChangeTheme";
import Header from "./Header";

let title = "conditional rendering";


export default function App() {
  return (
    <div>
      <Header/>
      <h1 style={{textAlign:"center"}}>{title}</h1>
      {/* <TrendingProducts /> */}
      {/* <LatestProducts /> */}
      {/* <Counter/> */}
      {/* <CounterNew/> */}
      {/* <Todos /> */}
      {/* <ProductsApi/> */}
      {/* <ProductSearch/> */}
      <GoogleTabs/>
      {/* <ChangeTheme/> */}
      {/* <Login/> */}
      {/* theme change: light /dark */}

    </div>
  );
}
