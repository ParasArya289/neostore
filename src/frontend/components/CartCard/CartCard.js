import { Button } from "react-bootstrap";
import { formatCurrency } from "../../utils/formatCurrency";
import { AiOutlineDelete } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import "./CartCard.css";
export const CartCard = ({ prod }) => {
  return (
    <div className="cartcard-container">
      <div className="cartcard-img">
        <img src={prod?.image} alt={prod?.name} />
      </div>
      <div className="cartcard-info">
        <h4>{prod?.name}</h4>
        <p>{formatCurrency(prod?.price, "INR")}</p>
        <p>{prod?.company}</p>
        <div className="cartcard-qty">
          <span>-</span>
          <span>{prod?.qty}</span>
          <span>+</span>
        </div>
        <Button variant="dark" className="prod-btn">
          Remove
        </Button>
        <Button variant="dark">Wishlist</Button>
      </div>
    </div>
  );
};
