import { useData } from "../../contexts/dataContext";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import { motion } from "framer-motion";
import "./Wishlist.css"
export const Wishlist = () => {
  const {
    dataState: { wishlist },
  } = useData();
  return (
    <>
      <div className="wishlist-header">
        {wishlist.length > 0 ? (
          <p>Showing all wishlisted items({wishlist.length})</p>
        ) : (
          <>
            <h4>Wishlist</h4>
            <p>You haven't added anything to wishlist yet!</p>
          </>
        )}
      </div>
      <motion.div layout className="products-container">
        {wishlist?.map((prod) => (
          <ProductsCard productData={prod} isWishlist={true} />
        ))}
      </motion.div>
    </>
  );
};
