import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ProductNavbar } from "../../components/ProductNavbar/ProductNavbar";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import { initState, SideBar } from "../../components/SideBar/SideBar";
import { dataContext } from "../../contexts/dataContext";
import { filterProductsOnParams } from "../../utils/filterProducts";
import "./Products.css";
// id,name,price,rating,colors,image,description,category

export const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { products, categories } = useContext(dataContext);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  // const filteredProducts = filterProductsOnParams(initState,products)
  const filterProductsOnParams = (state, array) => {
    let tempArray = array;
  const { category:catg, sort, rating:rat, color:clr, price:prc } = state;
  console.log({state, array})

  if(catg.length){
    tempArray = tempArray.filter(({category})=>catg.includes(category))
  }
  if(sort.length){
    tempArray= tempArray.sort((a,b)=>sort[0]==='LTH'?a.price-b.price:b.price-a.price)
  }
  if(rat.length){
    tempArray = tempArray.filter(({rating})=>rating<=rat[0])
  }
  if(clr.length){
    tempArray = tempArray.filter(({color})=>color === clr[0]);
  }
  if(prc){
    tempArray = tempArray.filter(({price})=>price <= prc);
  }
  return tempArray;
};
  console.log(filterProductsOnParams(initState,products))

  return (
    <>
      <ProductNavbar categories={categories} handleShow={handleShow} />
      <AnimatePresence>
        {/* <motion.h1>Showing all products</motion.h1> */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { ease: "linear" },
            duration: 1,
            delay: 0.3,
            layout: { duration: 0.3 },
          }}
          layout
          className="products-container"
        >
          <SideBar showSidebar={showSidebar} handleClose={handleClose} />
          {products.map((product) => (
            <ProductsCard key={product.name} productData={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
