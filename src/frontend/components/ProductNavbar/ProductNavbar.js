import "./ProductNavbar.css";
import { TfiFilter } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useFilterParams } from "../../contexts/filterParamsContext";

export const ProductNavbar = ({ categories, handleShow }) => {
  const { paramState, dispatchParams } = useFilterParams();

  const updateCategoryParams = (category) => {
    const checkExistence = paramState?.category;
    if (checkExistence.includes(category)) {
      dispatchParams({ type: "UPDATE_CATEGORY_UNCHECKED", payload: category });
    } else {
      dispatchParams({ type: "UPDATE_CATEGORY_CHECKED", payload: category });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="prod-nav"
      >
        <TfiFilter className="products-nav-icon" onClick={handleShow} />
        {categories.map(({ id, name, category }) => (
          <>
            <div key={id} class="vr-container">
              <div className="products-nav-item-vr"></div>
            </div>
            <p
              key={name}
              className="products-nav-item"
              style={{
                color: paramState?.category?.includes(category) ? "red" : "",
              }}
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
