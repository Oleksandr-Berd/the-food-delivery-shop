import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import ShopPage from "./Pages/ShopPage/ShopPage";
import ProductsList from "./Components/Products/ProductsList";
import { GlobalStyle } from "./Utilities/GlobalStyle";
import ShopCartPage from "./Pages/ShopCartPage/ShopCartPage";
import { ToastContainer } from "react-toastify";
import HomePage from "./Pages/HomePage/HomePage.jsx";

function App() {

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
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
