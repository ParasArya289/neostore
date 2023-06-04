import { useData } from "../../contexts/dataContext";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import { motion } from "framer-motion";
export const Wishlist = () => {
  const {
    dataState: { wishlist },
  } = useData();
  return (
    <>
      <h1>Wishlist</h1>
      <motion.div layout className="products-container">
        {wishlist?.map((prod) => (
          <ProductsCard productData={prod} isWishlist={true} />
        ))}
      </motion.div>
    </>
  );
};
