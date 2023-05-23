import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ProductNavbar } from "../../components/ProductNavbar/ProductNavbar";
import {
  BasicExample,
  ProductCard,
  ProductsCard,
} from "../../components/ProductsCard/ProductsCard";
import { dataContext } from "../../contexts/dataContext";
import "./Products.css";
// id,name,price,rating,colors,image,description,category
export const Products = () => {
  const { products, categories } = useContext(dataContext);
  return (
    <>
      <ProductNavbar categories={categories}/>
      <AnimatePresence>
        {/* <motion.h1>Showing all products</motion.h1> */}
        <motion.div layout className="products-container">
          {products.map((product) => (
            <ProductsCard key={product.name} productData={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
