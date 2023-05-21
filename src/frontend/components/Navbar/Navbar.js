import './Navbar.css';

import { NavLink } from "react-router-dom";
import { Searchbar } from '../Searchbar/Searchbar';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h4 className="navbar-title">Neostore</h4>
      </div>
      <div>
        <Searchbar/>
      </div>
      <div className="navbar-links">
       <NavLink className="navbar-navlinks" path="/wishlist">Wishlist</NavLink>
        <NavLink className="navbar-navlinks" path="/cart">Cart</NavLink>
        <NavLink className="navbar-navlinks" path="/auth">Login</NavLink>
      </div>
    </nav>
  );
};
