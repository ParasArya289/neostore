import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import { BsCart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Badge } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [test, setTest] = useState(0);
  const activeNavStyle = ({ isActive }) => {
    return {
      color: isActive ? "grey" : "",
    };
  };
  return (
    <AnimatePresence>
      <motion.nav
        onClick={() => setTest(test + 1)}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="navbar"
      >
        <div>
          <NavLink className="navbar-title-navlink" to="/">
            <h4 className="navbar-title">Neostore</h4>
          </NavLink>
        </div>
        <div>
          <Searchbar />
        </div>
        <div className="navbar-links">
          <NavLink
            style={activeNavStyle}
            className="navbar-navlinks"
            to="/wishlist"
          >
            <BsBag />
            <motion.Badge
              key={test}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="nav-badge"
            >
              {test}
            </motion.Badge>
          </NavLink>

          <NavLink
            style={activeNavStyle}
            className="navbar-navlinks"
            to="/cart"
          >
            <BsCart />
            <motion.Badge
              key={test}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="nav-badge"
            >
              {test}
            </motion.Badge>
          </NavLink>

          <NavLink
            style={activeNavStyle}
            className="navbar-navlinks"
            to="/auth"
          >
            <BiUser />
          </NavLink>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
