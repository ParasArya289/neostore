import { BsBag, BsFillBagFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../../../HelperFunctions/CartDataHelpers";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-hot-toast";
import { useData } from "../../contexts/dataContext";
import { checkIncludes } from "../../utils/checkIncludes";
import { formatCurrency } from "../../utils/formatCurrency";

// id,name,price,rating,colors,image,description,category

export const ProductsCard = ({ productData, isWishlist }) => {
  const { token } = useAuth();
  const {
    dataState: { wishlist, cart },
    dataDispatch,
  } = useData();
  console.log(wishlist, cart);
  const navigate = useNavigate();

  const productExistInCart = checkIncludes(cart, productData._id);
  const productExistInWishlist = checkIncludes(wishlist, productData._id);

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    return token
      ? toast.promise(
          addToWishlist(token, productData, dataDispatch),
          {
            loading: "Adding to Wishlist",
            success: "Added to Wishlist",
            error: "something went wrong",
          },
          {
            id: "toast",
          }
        )
      : navigate("/auth");
  };
  const handleRemoveFromWishlist = (e) => {
    e.stopPropagation();
    return token
      ? toast.promise(
          removeFromWishlist(token, productData._id, dataDispatch),
          {
            loading: "Removing from Wishlist",
            success: "Removed from Wishlist",
            error: "something went wrong",
          },
          {
            id: "toast",
          }
        )
      : navigate("/auth");
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    //add condition token && not includes in cart
    if (token && !productExistInCart) {
      toast.promise(
        addToCart(token, productData, dataDispatch),
        {
          loading: "Adding To Cart",
          success: "Added To Cart",
          error: "Something Went Wrong",
        },
        {
          id: "toast",
        }
      );
    } else if (!token) {
      navigate("/auth");
    }
    //add condition token && includes in cart
    else if (token && productExistInCart) {
      navigate("/cart");
    }

    console.log(productData);
  };

  const handleMoveToCart = (e) => {
    if (token && isWishlist && !productExistInCart) {
      handleRemoveFromWishlist(e);
      handleAddToCart(e);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={() => navigate("/products/" + productData._id)}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{
          opacity: { ease: "linear" },
          duration: 0.5,
          delay: 0.2,
          layout: {
            type:"spring",
            duration: 0.5,
          },
        }}
        layout
        className="prodcard-container"
      >
        <motion.img
          className="prodcard-image"
          src={productData?.image}
          alt={productData?.name}
        />
        <div className="prodcard-infoholder">
          <p className="prodcard-name">{productData?.name}</p>
          <p>{formatCurrency(productData.price, "INR")}</p>
          {productData?.colors.map((clr) => (
            <div
              className="prodcard-clr"
              style={{ backgroundColor: clr, width: "20px", height: "20px" }}
            ></div>
          ))}
          <p className="prodcard-des">
            {productData?.description.slice(0, 70) + "..."}
          </p>
          <div className="prodcard-rating">
            {Array(5)
              .fill(0)
              .map((_, i) =>
                productData?.rating <= i ? (
                  <AiOutlineStar key={i} />
                ) : (
                  <AiFillStar key={i} />
                )
              )}
          </div>
          <div className="prodcard-icon-container">
            <p className="prodcard-category">{productData?.category}</p>
            {productExistInWishlist ? (
              <motion.div
                initial={{ opacity: 0.5, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, y: 100 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="prodcard-icon-div"
              >
                <BsFillBagFill
                  className="prodcard-icon"
                  onClick={handleRemoveFromWishlist}
                />
              </motion.div>
            ) : (
              <div className="prodcard-icon-div">
                <BsBag
                  className="prodcard-icon"
                  onClick={handleAddToWishlist}
                />
              </div>
            )}
          </div>
          {!isWishlist ? (
            <Button
              className="prodcard-button"
              variant="dark"
              onClick={handleAddToCart}
            >
              {productExistInCart ? "Go To Cart" : "Add To Cart"}
            </Button>
          ) : (
            <Button
              className="prodcard-button"
              variant="dark"
              onClick={handleMoveToCart}
            >
              {productExistInCart ? "Go To Cart" : "Move To Cart"}
            </Button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
