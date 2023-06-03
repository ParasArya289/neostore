import { BsBag, BsFillBagFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { products } from "../../../backend/db/products";
import { Navigate, useNavigate } from "react-router-dom";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../../../HelperFunctions/CartDataHelpers";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-hot-toast";
// id,name,price,rating,colors,image,description,category

export const ProductsCard = ({ productData }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    return token
      ? toast.promise(addToWishlist(token, productData), {
          loading: "Adding to Wishlist",
          success: "Added to Wishlist",
          error: "something went wrong",
        })
      : navigate("/auth");
  };
  const handleRemoveFromWishlist = (e) => {
    e.stopPropagation();
    return token
      ? toast.promise(removeFromWishlist(token, productData._id), {
          loading: "Removing from Wishlist",
          success: "Removed from Wishlist",
          error: "something went wrong",
        })
      : navigate("/auth");
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    //add condition token && not includes in cart
    if (token) {
      addToCart(token, productData);
    } else if (!token) {
      navigate("/auth");
    }
    //add condition token && includes in cart
    else if (token) {
      navigate('/cart');
    }
  };

  return (
    <motion.div
      onClick={() => navigate("/")}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{
        opacity: { ease: "linear" },
        duration: 0.5,
        delay: 0.2,
        layout: { duration: 0.4 },
      }}
      layout
      className="prodcard-container"
    >
      <img
        className="prodcard-image"
        src={productData?.image}
        alt={productData?.name}
      />
      <div className="prodcard-infoholder">
        <p className="prodcard-name">{productData?.name}</p>

        <p>{productData.price}</p>
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

          <div className="prodcard-icon-div">
            <BsBag className="prodcard-icon" onClick={handleAddToWishlist} />
          </div>

          <div className="prodcard-icon-div">
            <BsFillBagFill
              className="prodcard-icon"
              onClick={handleRemoveFromWishlist}
            />
          </div>
        </div>
        <Button className="prodcard-button" variant="dark">
          Add To Cart
        </Button>
      </div>
    </motion.div>
  );
};

// export function ProductCard({prod}) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={prod.image} width="180px"/>
//       <Card.Body>
//         <Card.Title>{prod.name}</Card.Title>
//         <Card.Text>
//           {prod.description}
//         </Card.Text>
//         <Button variant="primary">Add to cart</Button>
//       </Card.Body>
//     </Card>
//   );
// }
