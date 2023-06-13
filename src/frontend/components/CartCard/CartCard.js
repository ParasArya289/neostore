import { Button } from "react-bootstrap";
import { formatCurrency } from "../../utils/formatCurrency";
import "./CartCard.css";
import {
  addToWishlist,
  removeFromCart,
  updateCart,
} from "../../../HelperFunctions/CartDataHelpers";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import { toast } from "react-hot-toast";
import { checkIncludes } from "../../utils/checkIncludes";
import { motion,AnimatePresence } from "framer-motion";
export const CartCard = ({ prod }) => {
  const { token } = useAuth();

  const {
    dataState: { wishlist },
    dataDispatch,
  } = useData();

  const productExistInWishlist = checkIncludes(wishlist, prod?._id);

  const incrementCart = () => {
    if (prod?.qty > 9) {
      return;
    }
    updateCart(token, prod?._id, dataDispatch, "increment");
  };
  const decrementCart = () => {
    if (prod.qty > 1) {
      updateCart(token, prod?._id, dataDispatch, "decrement");
    }
    return;
  };
  const remove = () => {
    //add condition token && not includes in cart
    if (token) {
      toast.promise(
        removeFromCart(token, prod?._id, dataDispatch),
        {
          loading: "Removing From Cart",
          success: "Removed From Cart",
          error: "Something Went Wrong",
        },
        {
          id: "toast",
        }
      );
    }
  };
  const handleAddToWishlist = () => {
    if (token && !productExistInWishlist) {
      toast.promise(
        addToWishlist(token, prod, dataDispatch),
        {
          loading: "Moving to Wishlist",
          success: "Moved to Wishlist",
          error: "something went wrong",
        },
        {
          id: "toast",
        }
      );
      removeFromCart(token, prod?._id, dataDispatch);
    } else if (token && productExistInWishlist) {
      removeFromCart(token, prod?._id, dataDispatch);
      toast.success("Product Already Exist in Wishlist", { id: "toast" });
    }
  };
  return (
      <motion.div
      exit={{opacity:0,x:-200}}
      className="cartcard-container">
        <div className="cartcard-img">
          <img src={prod?.image} alt={prod?.name} />
        </div>
        <div className="cartcard-info">
          <h4>{prod?.name}</h4>
          <p>{formatCurrency(prod?.price, "INR")}</p>
          <p>{prod?.company}</p>
          <div className="cartcard-qty">
            <span onClick={decrementCart}>-</span>
            <span>{prod?.qty}</span>
            <span onClick={incrementCart}>+</span>
          </div>
          <Button variant="dark" className="prod-btn" onClick={remove}>
            Remove
          </Button>
          <Button variant="dark" onClick={handleAddToWishlist}>
            Wishlist
          </Button>
        </div>
      </motion.div>
  );
};
