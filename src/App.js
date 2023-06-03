import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SharedLayout from "./Components/SharedLayout/SharedLayout";
import { GlobalStyle } from "./Utilities/GlobalStyle";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage.jsx"));
const ShopPage = lazy(() => import("./Pages/ShopPage/ShopPage"));
const ShopCartPage = lazy(() => import("./Pages/ShopCartPage/ShopCartPage"));
const ProductsList = lazy(() => import("./Components/Products/ProductsList"));


function App() {

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop/" element={<ShopPage />}>
              <Route path=":name" element={<ProductsList />} />
            </Route>
            <Route path="shoppingCart" element={<ShopCartPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
