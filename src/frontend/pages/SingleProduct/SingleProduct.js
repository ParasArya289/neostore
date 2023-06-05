import "./SingleProduct.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/dataContext";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineSafetyCertificate,
  AiOutlineFileProtect,
} from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { TbReplace } from "react-icons/tb";

import { formatCurrency } from "../../utils/formatCurrency";
import { uniqueColors } from "../../utils/unqiueColors";
import { useState } from "react";
export const SingleProduct = () => {
  const [clrHighlght, setClrHighlight] = useState("");

  const {
    dataState: { products },
  } = useData();

  const { productId } = useParams();

  const product = products.find(({ _id }) => _id === productId);

  const colors = uniqueColors(products);

  return (
    <div className="container">
      <div className="column">
        <img
          src={product?.image}
          alt="Product Image"
          className="product-image"
        />
      </div>
      <div className="column">
        <h4>{product?.name}</h4>
        <div className="prod-rating">
          {Array(5)
            .fill(0)
            .map((_, i) =>
              product?.rating <= i ? (
                <AiOutlineStar key={i} />
              ) : (
                <AiFillStar key={i} />
              )
            )}
        </div>
        <p className="prod-price">{formatCurrency(product?.price, "INR")}</p>
        <p className="prod-des">{product?.description}</p>
        <div className="prod-icons-container">
          <div>
            <BsTruck />
            <p>Fast Delivery</p>
          </div>
          <div>
            <TbReplace />
            <p>7 days replacement</p>
          </div>
          <div>
            <AiOutlineSafetyCertificate />
            <p>Neo Certified</p>
          </div>
          <div>
            <AiOutlineFileProtect />
            <p>1 year warranty</p>
          </div>
        </div>
        <div className="prod-additionalinfo">
          <p>
            Brand: <span>{product?.company}</span>
          </p>
        </div>
        <hr />
        <div className="prod-color-selection">
          Colours:
          {colors.map((hex) => (
            <div
              className="prodcard-clr"
              style={{
                backgroundColor: hex,
                width: "20px",
                height: "20px",
                border:
                  clrHighlght === hex ? "2px solid teal" : "0 solid black",
                outlineOffset: "2px",
              }}
              onClick={() => setClrHighlight(hex)}
            ></div>
          ))}
        </div>
        <Button className="prod-btn" variant="dark">
          Add To Cart
        </Button>
        <Button variant="dark">Add To Wishlist</Button>
      </div>
    </div>
  );
};
