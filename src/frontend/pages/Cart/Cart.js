import { toast } from "react-hot-toast";
import { addToCart, removeFromCart } from "../../../HelperFunctions/dataHelpers";
import { useAuth } from "../../contexts/authContext";

export const Cart = () => {
  const {token} = useAuth()
  let i=0;
  const handler = () =>{
    i++
    toast.promise(addToCart(token,{_id:i.toString(),name:"banana"}),
    {
      loading:'Adding to cart...',
      success:"Added To cart",
      error:"something went wrong"
    }
    ) 
  }
  const handler1 = () =>{
    toast.promise(removeFromCart(token,1),
    {
      loading:'Removing from cart...',
      success:"Removed from cart",
      error:"something went wrong"
    }
    ) 
  }
  return (
    <>
      <h1 onClick={handler}>Cart</h1>
      <h1 onClick={handler1}>Cart2</h1>
    </>
  );
};
