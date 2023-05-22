import './Navbar.css';

import { NavLink } from "react-router-dom";
import { Searchbar } from '../Searchbar/Searchbar';
import {BsCart} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'

export const Navbar = () => {
  // const activeNavStyle=({isActive})=>{
  //   return{

  //   }
  // }
  return (
    <nav className="navbar">
      <div>
        <h4 className="navbar-title">Neostore</h4>
      </div>
      <div>
        <Searchbar/>
      </div>
      <div className="navbar-links">
       <NavLink className="navbar-navlinks" to="/wishlist"><BsBag /></NavLink>
        <NavLink  className="navbar-navlinks" to="/cart"><BsCart /></NavLink>
        <NavLink className="navbar-navlinks" to="/auth"><BiUser /></NavLink>
      </div>
    </nav>
  );
};
