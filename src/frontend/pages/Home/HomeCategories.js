import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearAllParams } from "../../../HelperFunctions/filterParamsHelpers";
import { useData } from "../../contexts/dataContext";
import { useFilterParams } from "../../contexts/filterParamsContext";
import "./Home.css";

export const HomeCategories = () => {
  const {
    dataState: { categories, filterResetPreference },
  } = useData();
  const navigate = useNavigate();
  const { dispatchParams } = useFilterParams();

  useEffect(() => {
    if (filterResetPreference) {
      dispatchParams({ type: "CLEAR_WHEN_ON_HOME" });
      navigate({ path: "/", search: "" });
    }
  }, []);

  const navigateToCategory = (category) => {
    navigate("./products");
    dispatchParams({ type: "UPDATE_CATEGORY_SINGLE", payload: category });
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <motion.div
            onClick={() => navigateToCategory(category?.category)}
            key={category.id}
            className="category"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{category.name}</h3>
            <p>{"Discover " + category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
