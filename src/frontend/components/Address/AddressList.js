import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "./Address.css";

export const AddressList = ({ address = [], dispatch, selectedAddress }) => {
  const changeActiveAddress = (ad) => {
    dispatch({ type: "ACTIVE_ADDRESS", payload: ad });
  };
  console.log(address, selectedAddress);
  return (
    <div className="addresslist-container">
      {address.map((ad) => (
        <>
          <div key={ad.id} className="addresslist activeaddress">
            <input
              type="radio"
              name="addressGroup"
              checked={ad?.id === selectedAddress?.id}
              onChange={() => changeActiveAddress(ad)}
            />
            <div>
              <p>{ad.name}</p>
              <p>
                {ad.locality},{ad.city},{ad.state},{ad.country},{ad.pincode}
              </p>
              <p>Mobile: {ad.mobile}</p>
            </div>
          </div>
          {address.length > 1 && <hr />}
        </>
      ))}
    </div>
  );
};
