import { Button } from "react-bootstrap";
import { CartPriceCounter } from "../../utils/CartPriceCalculator";
import { formatCurrency } from "../../utils/formatCurrency";
import './CartPrice.css';
export const CartPriceDetail = ({ cart }) => {
    const {total,totalProduct} = CartPriceCounter(cart);
  return (
    <div className="cartprice-container">
      <h4>Price Details</h4>
      <hr />
      <div className="cartprice-price">
        <div className="price-cl1">
          <p>Price({(totalProduct)+ " items"})</p>
          <p>Discount</p>
          <p>Delivery Charges</p>
        </div>
        <div className="price-cl2">
          <p>{formatCurrency(total,"INR")}</p>
          <p>{formatCurrency(0,"INR")}</p>
          <p>{formatCurrency(0,"INR")}</p>
        </div>
      </div>
      <hr />
      <div className="cartprice-amount">
        <p>Total Amount</p>
        <p>{formatCurrency(total,"INR")}</p>
      </div>
      <hr />
      <Button variant="dark">Checkout</Button>
    </div>
  );
};
