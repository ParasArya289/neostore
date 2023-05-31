import Mockman from "mockman-js";
import "./App.css";
import { Navbar } from "../src/frontend/components/Navbar/Navbar";
import { Home } from "../src/frontend/pages/Home/Home";
import { Products } from "../src/frontend/pages/Products/Products";
import { Cart } from "../src/frontend/pages/Cart/Cart";
import { Wishlist } from "../src/frontend/pages/Wishlist/Wishlist";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./frontend/pages/Auth/Auth";
import { UserProfile } from "./frontend/pages/UserProfile/UserProfile";
import { PrivateRoute } from "./frontend/components/PrivatRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      {/* <Mockman/> */}
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} toastOptions={{
          style: {
            marginTop:"60px"
          },
        }}/>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
