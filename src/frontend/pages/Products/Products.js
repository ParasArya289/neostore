import { motion, AnimatePresence } from "framer-motion";
import { useContext,useState } from "react";
import { ProductNavbar } from "../../components/ProductNavbar/ProductNavbar";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import { SideBar } from "../../components/SideBar/SideBar";
import { dataContext } from "../../contexts/dataContext";
import "./Products.css";
// id,name,price,rating,colors,image,description,category

export const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { products, categories } = useContext(dataContext);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <ProductNavbar categories={categories} handleShow={handleShow} />
      <AnimatePresence>
        {/* <motion.h1>Showing all products</motion.h1> */}
        <motion.div layout className="products-container">
          <SideBar showSidebar={showSidebar} handleClose={handleClose}/>
          {products.map((product) => (
            <ProductsCard key={product.name} productData={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
