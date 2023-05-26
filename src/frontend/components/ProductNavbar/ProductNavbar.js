import "./ProductNavbar.css";
import { TfiFilter } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { initState } from "../SideBar/SideBar";
import { useState } from "react";
export const ProductNavbar = ({ categories, handleShow }) => {
  const [check,unCheck] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let state = initState;
  const updateCategoryParams = (category) => {
    const checkExistence = searchParams.getAll("category")
    if(checkExistence.includes(category)){
      state={
        ...state,
        category:checkExistence.filter((catg)=>catg!==category)
      }
      setSearchParams(state)
    }else{
      state={
      ...state,
      category
    }
    setSearchParams(state)
    }
    
    
  }
  const clearCategoryParams = () =>{
    state={
      ...state,
    }
  }
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="prod-nav"
      >
        <TfiFilter className="products-nav-icon" onClick={handleShow} />
        {categories.map(({ id, name, category }) => (
          <>
            <div key={id} class="vr-container">
              <div className="products-nav-item-vr"></div>
            </div>
            <p
              key={id}
              className="products-nav-item"
              style={{color:searchParams.getAll("category").includes(category)?'red':''}}
              onClick={() => updateCategoryParams(category)}
            >
              {name}
            </p>
          </>
        ))}
      </motion.nav>
    </>
  );
};
