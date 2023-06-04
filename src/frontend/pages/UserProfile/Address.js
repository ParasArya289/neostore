import './Address.css';
import { useData } from "../../contexts/dataContext";
import {FiEdit2} from "react-icons/fi"
import {AiOutlineDelete} from 'react-icons/ai'
export const Address = () => {
  const {
    dataState: { address },dataDispatch
  } = useData();

  const deleteAddressHandler = (adID) =>{
    console.log(adID)
    dataDispatch({type:"DELETE_ADDRESS",payload:adID})
  }

  const addAddressHandler = () => {
  }

  const updateAddressHandler = (adID) =>{

  }

  return (
    <div className="address-main">
      <h5 className="profile-heading">Your Addresses</h5>
      {address.map((ad) => (
        <div key={ad.id} className="address-container">
          <p>{ad.name}</p>
          <p>
            {ad.locality},{ad.city},{ad.state},{ad.country},{ad.pincode}
          </p>
          <p>Mobile: {ad.mobile}</p>
          <div className='address-icons'>
            <FiEdit2 className='address-icon-edit'/>
            <AiOutlineDelete className='address-icon-dlt'
            onClick={()=>deleteAddressHandler(ad.id)}/>
          </div>
        </div >
      ))}
      <h6 className='address-btn'>+ Add New Address</h6>
    </div>
  );
};
