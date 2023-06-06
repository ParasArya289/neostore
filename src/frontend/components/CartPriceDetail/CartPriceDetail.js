import { Button } from "react-bootstrap";
import { formatCurrency } from "../../utils/formatCurrency";
import './CartPrice.css';
export const CartPriceDetail = ({ cart }) => {
  return (
    <div className="cartprice-container">
      <h4>Price Details</h4>
      <hr />
      <div className="cartprice-price">
        <div className="price-cl1">
          <p>Price{"(2) items"}</p>
          <p>Discount</p>
          <p>Delivery Charges</p>
        </div>
        <div className="price-cl2">
          <p>{formatCurrency(1200,"INR")}</p>
          <p>{formatCurrency(0,"INR")}</p>
          <p>{formatCurrency(0,"INR")}</p>
        </div>
      </div>
      <hr />
      <div className="cartprice-amount">
        <p>Total Amount</p>
        <p>{2323}</p>
      </div>
      <hr />
      <Button variant="dark">Checkout</Button>
    </div>
  );
};
