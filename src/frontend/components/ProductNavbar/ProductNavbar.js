import "./ProductNavbar.css";
import { TfiFilter } from "react-icons/tfi";
export const ProductNavbar = ({ categories,handleShow }) => {
  
  return (
    <>
      <nav className="prod-nav">
        <TfiFilter className="products-nav-icon" onClick={handleShow}/>
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
      </nav>
    </>
  );
};