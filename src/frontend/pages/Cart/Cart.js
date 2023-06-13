import "./Cart.css";
import { useData } from "../../contexts/dataContext";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartPriceDetail } from "../../components/CartPriceDetail/CartPriceDetail";
import { motion, AnimatePresence } from "framer-motion";

export const Cart = () => {
  const {
    dataState: { cart },
  } = useData();

  const isMobile = window.innerWidth <= 1000;

  return (
    <AnimatePresence>
      <div className="wishlist-header">
        {cart.length > 0 ? (
          <p>Showing all carted items({cart.length})</p>
        ) : (
          <>
            <h4>My Cart</h4>
            <p>You haven't added anything to cart yet!</p>
          </>
        )}
      </div>
      {cart.length > 0 && (
        <motion.div
          className="cart-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="cart-items"
            initial={{ x: isMobile ? 0 : 100, y: isMobile ? 60 : 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="cart-center-item">
              <AnimatePresence>
                {cart?.map((prod) => (
                  <CartCard key={prod._id} prod={prod} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
          <div className="cart-detail">
            <CartPriceDetail cart={cart} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
