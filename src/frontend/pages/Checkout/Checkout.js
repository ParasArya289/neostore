import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddressList } from "../../components/Address/AddressList";
import { CheckoutSummary } from "../../components/CheckoutSummary/CheckoutSummary";
import { useData } from "../../contexts/dataContext";
export const Checkout = () => {
  const {
    dataState: { address, cart, selectedAddress },
    dataDispatch,
  } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    cart.length === 0 && navigate("/products");
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-center-item">
          <AddressList
            address={address}
            dispatch={dataDispatch}
            selectedAddress={selectedAddress}
          />
        </div>
      </div>
      <div className="cart-detail">
        <CheckoutSummary cart={cart} selectedAddress={selectedAddress} />
      </div>
    </div>
  );
};
