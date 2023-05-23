import "./ProductNavbar.css";
import { TfiFilter } from "react-icons/tfi";
import { motion } from "framer-motion";
export const ProductNavbar = ({ categories, handleShow }) => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="prod-nav"
      >
        <TfiFilter className="products-nav-icon" onClick={handleShow} />
        {categories.map(({ id, name }) => (
          <>
            <div key={id} class="vr-container">
              <div className="products-nav-item-vr"></div>
            </div>
            <p key={id} className="products-nav-item">
              {name}
            </p>
          </>
        ))}
      </motion.nav>
    </>
  );
};
