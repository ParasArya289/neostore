import { Button } from "react-bootstrap";
import { CartPriceCounter } from "../../utils/CartPriceCalculator";
import { formatCurrency } from "../../utils/formatCurrency";
import "./CheckoutSummary.css";

export const CheckoutSummary = ({ cart = [], selectedAddress }) => {
  const { total, totalProduct } = CartPriceCounter(cart);
  return (
    <div className="cartprice-container checkoutSummary-container">
      <h4>Product Details</h4>
      <hr />
      <div className="cartprice-price">
        <div className="price-cl1">
          <p>
            <b>Product</b>
          </p>
        </div>
        <div className="price-cl2">
          <p>
            <b>Quantity</b>
          </p>
        </div>
      </div>
      {cart.map(({ _id, name, qty }) => (
        <div key={_id} className="cartprice-price">
          <div className="price-cl1">
            <p>{name}</p>
          </div>
          <div className="price-cl2">
            <p>{qty}</p>
          </div>
        </div>
      ))}
      <hr />
      <h4>Price Details</h4>
      <hr />
      <div className="cartprice-price">
        <div className="price-cl1">
          <p>Price({totalProduct + " items"})</p>
          <p>Discount</p>
          <p>Delivery Charges</p>
        </div>
        <div className="price-cl2">
          <p>{formatCurrency(total, "INR")}</p>
          <p>{formatCurrency(0, "INR")}</p>
          <p>{formatCurrency(0, "INR")}</p>
        </div>
      </div>
      <hr />
      <div className="cartprice-amount">
        <p>Total Amount</p>
        <p>{formatCurrency(total, "INR")}</p>
      </div>
      <hr />
      <h4>Delivery address</h4>
      <hr />
      <div className="checkout-address">
        <p>{selectedAddress.name}</p>
        <p>
          {selectedAddress.locality},{selectedAddress.city},
          {selectedAddress.state},{selectedAddress.country},
          {selectedAddress.pincode}
        </p>
        <p>Mobile: {selectedAddress.mobile}</p>
      </div>
      <hr />
      <Button variant="dark">Place Order</Button>
    </div>
  );
};
