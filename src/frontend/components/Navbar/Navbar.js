import './Navbar.css';

import { NavLink } from "react-router-dom";
import { Searchbar } from '../Searchbar/Searchbar';
import {BsCart} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import { Badge } from 'react-bootstrap';

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

       <NavLink className="navbar-navlinks" to="/wishlist"><BsBag /><Badge className="nav-badge">12</Badge></NavLink>
        
        <NavLink  className="navbar-navlinks" to="/cart"><BsCart /><Badge className="nav-badge">9</Badge></NavLink>
        
        <NavLink className="navbar-navlinks" to="/auth"><BiUser /></NavLink>
      </div>
    </nav>
  );
};
