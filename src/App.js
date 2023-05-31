import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import ShopPage from "./Pages/ShopPage/ShopPage";
import ProductsList from "./Components/Products/ProductsList";
import { GlobalStyle } from "./Utilities/GlobalStyle";

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="shop/" element={<ShopPage />}>
              <Route path=":name" element={<ProductsList />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
