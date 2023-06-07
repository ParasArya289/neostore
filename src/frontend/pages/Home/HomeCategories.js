import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/dataContext";
import "./Home.css";

export const HomeCategories = () => {
  const {
    dataState: { categories },
  } = useData();
  const navigate = useNavigate();
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <motion.div
            onClick={() => navigate(`/products?category=${category.category}`)}
            key={category.id}
            className="category"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{category.name}</h3>
            <p>{"Discover "+category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
