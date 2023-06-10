import { motion, stagger, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductNavbar } from "../../components/ProductNavbar/ProductNavbar";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import { initState, SideBar } from "../../components/SideBar/SideBar";
import { dataContext, useData } from "../../contexts/dataContext";
import { useFilterParams } from "../../contexts/filterParamsContext";
import { capitalizer } from "../../utils/capitalizerFunction";
import { filterProductsOnParams } from "../../utils/filterProducts";
import "./Products.css";
// id,name,price,rating,colors,image,description,category

export const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { dataState } = useData();
  const { paramState } = useFilterParams();

  // const params = {
  //   category: searchParams.getAll("category"),
  //   sort: searchParams.getAll("sort"),
  //   rating: searchParams.getAll("rating"),
  //   color: searchParams.getAll("color"),
  //   price: searchParams.get("price") ? searchParams.get("price") : "150000",
  //   search: searchParams.getAll("search"),
  // };

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
