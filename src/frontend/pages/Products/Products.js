import { motion, stagger, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { updatePriceParams } from "../../../HelperFunctions/filterParamsHelpers";
import { ProductNavbar } from "../../components/ProductNavbar/ProductNavbar";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import { SideBar } from "../../components/SideBar/SideBar";
import { useData } from "../../contexts/dataContext";
import { useFilterParams } from "../../contexts/filterParamsContext";
import { capitalizer } from "../../utils/capitalizerFunction";
import { filterProductsOnParams } from "../../utils/filterProducts";
import "./Products.css";

export const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { dataState } = useData();
  const { paramState, dispatchParams } = useFilterParams();

  useEffect(() => {
    updatePriceParams(
      Array.isArray(paramState?.price) ? "150000" : paramState?.price,
      dispatchParams
    );
  }, []);

  const filteredProducts = filterProductsOnParams(
    paramState,
    dataState?.products
  );

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <ProductNavbar
        categories={dataState?.categories}
        handleShow={handleShow}
      />
      <AnimatePresence>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Showing all{" "}
          <motion.span>
            {!paramState?.category.length
              ? "Products"
              : capitalizer(paramState?.category)}
            ({filteredProducts.length})
          </motion.span>
        </motion.p>
        <motion.div layout className="products-container">
          <SideBar showSidebar={showSidebar} handleClose={handleClose} />
          {filteredProducts.map((product) => (
            <ProductsCard key={product._id} productData={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
