import LatestProducts from "./LatestProducts";
import TrendingProducts from "./TrendingProducts";
import Todos from "./Todos";
import Counter from "./Counter";
import CounterNew from "./CounterNew";
import ProductsApi from "./ProductsApi";
import Login from "./Login";
import ProductSearch from "./ProductSearch";
import GoogleTabs from "./GoogleTabs";
import ChangeTheme from "./ChangeTheme";
import Header from "./Header";
import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

let title = "conditional rendering";

export default function App() {
  const [theme, setTheme] = useState("light");

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Header theme={theme} setTheme={setTheme} />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "products",
          children: [
            {
              path: "",
              element: (
                <div>
                  <h1>Products</h1>
                </div>
              ),
            },
            {
              path: "watch",
              element: (
                <div>
                  <h1>Watch Page</h1>
                </div>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <RouterProvider router={router} />

      {/* <TrendingProducts /> */}
      {/* <LatestProducts /> */}
      {/* <Counter/> */}
      {/* <CounterNew/> */}
      {/* <Todos /> */}
      {/* <ProductsApi/> */}
      {/* <ProductSearch/> */}
      {/* <GoogleTabs /> */}
      {/* <ChangeTheme/> */}
      {/* <Login/> */}
      {/* theme change: light /dark */}
    </div>
  );
}
