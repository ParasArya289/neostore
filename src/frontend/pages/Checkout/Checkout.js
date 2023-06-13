import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddressList } from "../../components/Address/AddressList";
import { CheckoutSummary } from "../../components/CheckoutSummary/CheckoutSummary";
import { useData } from "../../contexts/dataContext";
import { motion } from "framer-motion";
export const Checkout = () => {
  const {
    dataState: { address, cart, selectedAddress },
    dataDispatch,
  } = useData();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 1000;
  useEffect(() => {}, []);
  cart.length === 0 && navigate("/products");

  return (
    <motion.div
      className="cart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: isMobile ? 0 : 100, y: isMobile ? 60 : 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="cart-items"
      >
        <div className="cart-center-item">
          <AddressList
            address={address}
            dispatch={dataDispatch}
            selectedAddress={selectedAddress}
          />
        </div>
      </motion.div>
      <div className="cart-detail">
        <CheckoutSummary cart={cart} selectedAddress={selectedAddress} />
      </div>
    </motion.div>
  );
};
