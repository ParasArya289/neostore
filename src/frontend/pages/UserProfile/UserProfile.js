import { useState } from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { Profile } from "./Profile";

export const UserProfile = () => {
  const [userUi, setUserUi] = useState("user");
  const [ref, { height }] = useMeasure();
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, height: height + 70 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="auth-container"
      >
        <header className="auth-header">
          <button
            style={{ background: userUi !== "user" ? "#262626" : "#404040" }}
            onClick={() => setUserUi("user")}
          >
            Your Profile
          </button>
          <button
            style={{ background: userUi === "user" ? "#262626" : "#404040" }}
            onClick={() => setUserUi("address")}
          >
            Address
          </button>
        </header>
        <div ref={ref}>{userUi === "user" ? <Profile /> : "world"}</div>
      </motion.div>
    </>
  );
};
