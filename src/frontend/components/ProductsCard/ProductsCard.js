import { BsBag, BsFillBagFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { products } from "../../../backend/db/products";
import {Navigate, useNavigate} from 'react-router-dom';

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// id,name,price,rating,colors,image,description,category

export const ProductsCard = ({ productData }) => 
{
    const navigate = useNavigate()
  return (
    <motion.div onClick={()=>navigate('/')}
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    exit={{ opacity: 0 }}
      transition={{
        opacity: { ease: "linear" },
        duration:0.2,
        delay:0.1,
        layout: { duration: 0.2 }
      }}
      layout

    className="prodcard-container">
      <img
        className="prodcard-image"
        src={productData?.image}
        alt={productData?.name}
      />
      <div className="prodcard-infoholder">
        <p className="prodcard-name">{productData?.name}</p>

        <p>{productData.price}</p>
        {productData?.colors.map((clr) => (
          <div
            className="prodcard-clr"
            style={{ backgroundColor: clr, width: "20px", height: "20px" }}
          ></div>
        ))}

        <p className="prodcard-des">
          {productData?.description.slice(0, 70) + "..."}
        </p>

        <div className="prodcard-rating">
          {Array(5)
            .fill(0)
            .map((_, i) =>
              productData?.rating <= i ? (
                <AiOutlineStar key={i} />
              ) : (
                <AiFillStar key={i} />
              )
            )}
        </div>

        <div className="prodcard-icon-container">
          <p className="prodcard-category">{productData?.category}</p>

          <div className="prodcard-icon-div">
            <BsBag className="prodcard-icon" />
          </div>

          <div className="prodcard-icon-div">
            <BsFillBagFill className="prodcard-icon" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// export function ProductCard({prod}) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={prod.image} width="180px"/>
//       <Card.Body>
//         <Card.Title>{prod.name}</Card.Title>
//         <Card.Text>
//           {prod.description}
//         </Card.Text>
//         <Button variant="primary">Add to cart</Button>
//       </Card.Body>
//     </Card>
//   );
// }
