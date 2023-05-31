import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout/SharedLayout';
import ShopPage from './Pages/ShopPage/ShopPage';
import ShopItem from './Components/ShopList/ShopItem/ShopItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route path="shop" element={<ShopPage />}>
          <Route path="shop/:name" element={<ShopItem/>} />
          </Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
