import './Navbar.css';

import { NavLink } from "react-router-dom";
import { Searchbar } from '../Searchbar/Searchbar';
import {BsCart} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import { Badge } from 'react-bootstrap';
import{motion} from "framer-motion";
import { useState } from 'react';

export const Navbar = () => {
  const [test,setTest] = useState(0);
  // const activeNavStyle=({isActive})=>{
  //   return{

  //   }
  // }
  return (
    <nav className="navbar">
      <div onClick={()=>setTest(test+1)}>
        <h4 className="navbar-title">Neostore</h4>
      </div>
      <div>
        <Searchbar/>
      </div>
      <div className="navbar-links">

       <NavLink className="navbar-navlinks" to="/wishlist"><BsBag /><motion.Badge 
        key={test}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}className="nav-badge">{test}</motion.Badge></NavLink>
        
        <NavLink className="navbar-navlinks" to="/cart"><BsCart /><motion.Badge 
        key={test}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}className="nav-badge">{test}</motion.Badge></NavLink>
        
        <NavLink className="navbar-navlinks" to="/auth"><BiUser /></NavLink>
      </div>
    </nav>
  );
};
