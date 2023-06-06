import "./Cart.css";
import { toast } from "react-hot-toast";
import {
  addToCart,
  removeFromCart,
} from "../../../HelperFunctions/CartDataHelpers";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartPriceDetail } from "../../components/CartPriceDetail/CartPriceDetail";

export const Cart = () => {
  const {
    dataState: { cart },
  } = useData();

  return (
    <>
    <div className="wishlist-header">
        {cart.length > 0 ? (
          <p>Showing all carted items({cart.length})</p>
        ) : (
          <>
            <h4>My Cart</h4>
            <p>You haven't added anything to cart yet!</p>
          </>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-center-item">
              {cart?.map((prod) => (
                <CartCard prod={prod} />
              ))}
            </div>
          </div>
          <div className="cart-detail">
            <CartPriceDetail cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};
