import "./ProductNavbar.css";
import { TfiFilter } from "react-icons/tfi";
export const ProductNavbar = ({ categories }) => {
  return (
    <>
      <nav className="prod-nav">
        <TfiFilter className="products-nav-icon"/>
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
