import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import { motion } from "framer-motion";
import { HomeCategories } from "./HomeCategories";
import { Button } from "react-bootstrap";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <motion.div
          className="gradient-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="banner">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Our Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover the latest gadget in tech.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Button
              variant="secondary"
              className="home-btn"
              onClick={() => navigate("/products")}
            >
              Discover
            </Button>
          </motion.div>
        </div>
      </div>
      <HomeCategories />
    </>
  );
};
