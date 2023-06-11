import { AddressList } from "../../components/Address/AddressList";
import { CheckoutSummary } from "../../components/CheckoutSummary/CheckoutSummary";
import { useData } from "../../contexts/dataContext";
export const Checkout = () => {
  const {
    dataState: { address, cart, selectedAddress },
    dataDispatch,
  } = useData();
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
        <CheckoutSummary cart={cart} />
      </div>
    </div>
  );
};
