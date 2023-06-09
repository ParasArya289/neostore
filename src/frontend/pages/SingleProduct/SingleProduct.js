import "./SingleProduct.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/dataContext";
import { useAuth } from "../../contexts/authContext";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineSafetyCertificate,
  AiOutlineFileProtect,
} from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { TbReplace } from "react-icons/tb";

import { formatCurrency } from "../../utils/formatCurrency";
import { uniqueColors } from "../../utils/unqiueColors";
import { useState } from "react";
import { checkIncludes } from "../../utils/checkIncludes";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
} from "../../../HelperFunctions/CartDataHelpers";
import {motion, AnimatePresence } from "framer-motion";
export const SingleProduct = () => {
  const [clrHighlght, setClrHighlight] = useState("");
  const {
    dataState: { products, cart, wishlist },
    dataDispatch,
  } = useData();

  const { token } = useAuth();
  const { productId } = useParams();

  const navigate = useNavigate();

  const product = products?.find(({ _id }) => _id === productId);

  const colors = uniqueColors(products);

  const productExistInCart = checkIncludes(cart, product?._id);

  const productExistInWishlist = checkIncludes(wishlist, product?._id);

  const isMobile = window.innerWidth <= 768;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    //add condition token && not includes in cart
    if (token && !productExistInCart) {
      toast.promise(
        addToCart(token, product, dataDispatch),
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
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    if (token && !productExistInWishlist) {
      toast.promise(
        addToWishlist(token, product, dataDispatch),
        {
          loading: "Adding to Wishlist",
          success: "Added to Wishlist",
          error: "something went wrong",
        },
        {
          id: "toast",
        }
      );
    } else if (!token) {
      navigate("/auth");
    } else if (token && productExistInWishlist) {
      navigate("/wishlist");
    }
  };

  return (
    <AnimatePresence>
      <motion.div className="container"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
      >
        <motion.div className="column"
        initial={{x:isMobile?0:100,y:isMobile?60:0}}
        animate={{x:0,y:0}}
        transition={{duration:0.2}}
        >
          <img
            src={product?.image}
            alt="Product Image"
            className="product-image"
          />
        </motion.div>
        <div className="column">
          <h4>{product?.name}</h4>
          <motion.div className="prod-rating"
          >
            {Array(5)
              .fill(0)
              .map((_, i) =>(
                <motion.span initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.1*i}}>
                  {product?.rating <= i ? (
                    <AiOutlineStar key={i} />
                  ) : (
                    <AiFillStar key={i} />
                  )}
                </motion.span>
              ))}
          </motion.div>
          <p className="prod-price">{formatCurrency(product?.price, "INR")}</p>
          <p className="prod-des">{product?.description}</p>
          <div className="prod-icons-container">
            <div>
              <BsTruck />
              <p>Fast Delivery</p>
            </div>
            <div>
              <TbReplace />
              <p>7 days replacement</p>
            </div>
            <div>
              <AiOutlineSafetyCertificate />
              <p>Neo Certified</p>
            </div>
            <div>
              <AiOutlineFileProtect />
              <p>1 year warranty</p>
            </div>
          </div>
          <div className="prod-additionalinfo">
            <p>
              Brand: <span>{product?.company}</span>
            </p>
          </div>
          <hr />
          <div className="prod-color-selection">
            {colors.map((hex) => (
              <div
                key={hex}
                className="prodcard-clr"
                style={{
                  backgroundColor: hex,
                  width: "20px",
                  height: "20px",
                  border:
                    clrHighlght === hex ? "2px solid teal" : "0 solid black",
                  outlineOffset: "2px",
                }}
                onClick={() => setClrHighlight(hex)}
              ></div>
            ))}
          </div>
          <Button className="prod-btn" variant="dark" onClick={handleAddToCart}>
            {productExistInCart ? "Go To Cart" : "Add To Cart"}
          </Button>
          <Button variant="dark" onClick={handleAddToWishlist}>
            {productExistInWishlist ? "Go To Wishlist" : "Add To Wishlist"}
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
