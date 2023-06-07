import "./Address.css";
import { useData } from "../../contexts/dataContext";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import AddressModal from "./addressModal";
import { toast } from "react-hot-toast";
export const Address = () => {
  const [show, setShow] = useState(false);
  const [updateAddress, setUpdateAddress] = useState(false);
  const [addressId, setAddressId] = useState(null);

  const {
    dataState: { address },
    dataDispatch,
  } = useData();

  const handleShow = () => setShow(true);

  const deleteAddressHandler = (adID) => {
    toast.success("Address Removed", { id: "toast" });
    dataDispatch({ type: "DELETE_ADDRESS", payload: adID });
  };

  const handleUpdateShow = (adID) => {
    setShow(true);
    setUpdateAddress(true);
    setAddressId(adID);
  };

  return (
    <div className="address-main">
      <AddressModal
        show={show}
        setShow={setShow}
        updateAddress={updateAddress}
        setUpdateAddress={setUpdateAddress}
        addressId={addressId}
      />
      <h5 className="profile-heading">Your Addresses</h5>
      {address.map((ad, i) => (
        <div key={ad.id} className="address-container">
          <p>{ad.name}</p>
          <p>
            {ad.locality},{ad.city},{ad.state},{ad.country},{ad.pincode}
          </p>
          <p>Mobile: {ad.mobile}</p>
          <div className="address-icons">
            <FiEdit2
              className="address-icon-edit"
              onClick={() => handleUpdateShow(ad.id)}
            />
            <AiOutlineDelete
              className="address-icon-dlt"
              onClick={() => deleteAddressHandler(ad.id)}
            />
          </div>
          {address.length > 1 && <hr />}
        </div>
      ))}
      <h6 className="address-btn" onClick={handleShow}>
        + Add New Address
      </h6>
    </div>
  );
};
