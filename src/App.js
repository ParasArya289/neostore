import Mockman from "mockman-js";
import "./App.css";
import {Navbar} from '../src/frontend/components/Navbar/Navbar';
import{Home} from '../src/frontend/pages/Home/Home'
import{Products} from '../src/frontend/pages/Products/Products'
import{Cart} from '../src/frontend/pages/Cart/Cart'
import{Wishlist} from '../src/frontend/pages/Wishlist/Wishlist'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Mockman/> */}
      <Navbar/>
      <Routes>
        <Route path="/mockman" element={<Mockman/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;