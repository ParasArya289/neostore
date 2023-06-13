import { useState } from "react";
import "./SideBar.css";
import { Button, Offcanvas } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {useData } from "../../contexts/dataContext";
import { uniqueColors } from "../../utils/unqiueColors";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  updatePriceParams,
  updateCategoryParams,
  updateRatingParams,
  updateSortParams,
  updateColorParams,
  clearCategoryParams,
  clearColorParams,
  clearPriceParams,
  clearRatingParams,
  clearSortParams,
  clearAllParams,
} from "../../../HelperFunctions/filterParamsHelpers";
import { useFilterParams } from "../../contexts/filterParamsContext";

export const SideBar = ({ showSidebar, handleClose }) => {
  const [hover, setHover] = useState({
    state: false,
    end: 0,
  });

  const {
    dataState: { products, categories, filterResetPreference },
    dataDispatch,
  } = useData();

  const { paramState, dispatchParams } = useFilterParams();

  const colors = uniqueColors(products);

  const formatedPrice = formatCurrency(`${paramState.price || 0}`, "INR");

  return (
    <>
      <Offcanvas className="offcanvas" show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="filter-header">
            <h1>Price</h1>
            <p onClick={() => clearPriceParams(dispatchParams)}>Clear</p>
          </div>
          <p>{formatedPrice}</p>
          <input
            className="filter-range"
            type="range"
            min="0"
            max="150000"
            step={"5000"}
            value={paramState.price}
            onChange={(e) => updatePriceParams(e.target.value, dispatchParams)}
          />
          <div className="filter-header">
            <h1>Sort</h1>
            <p onClick={() => clearSortParams(dispatchParams)}>Clear</p>
          </div>
          <div className="filter-section">
            <label>High To Low</label>
            <input
              type="radio"
              name="sort"
              value="HTL"
              checked={paramState.sort === "HTL"}
              onChange={(e) => updateSortParams(e, dispatchParams)}
            />
          </div>
          <div className="filter-section">
            <label>Low To High</label>
            <input
              type="radio"
              name="sort"
              value="LTH"
              checked={paramState.sort === "LTH"}
              onChange={(e) => updateSortParams(e, dispatchParams)}
            />
          </div>
          <div className="filter-header">
            <h1>Category</h1>
            <p onClick={() => clearCategoryParams(dispatchParams)}>Clear</p>
          </div>
          {categories.map(({ id, name, category }) => (
            <div key={id} className="filter-section">
              <label>{name}</label>
              <input
                type="checkbox"
                name={category}
                checked={paramState.category.includes(category)}
                onChange={(e) => updateCategoryParams(e, dispatchParams)}
              />
            </div>
          ))}
          <div className="filter-header">
            <h1>Colors</h1>
            <p onClick={() => clearColorParams(dispatchParams)}>Clear</p>
          </div>
          {colors.map((hex) => (
            <div
              className="prodcard-clr"
              style={{
                backgroundColor: hex,
                width: "20px",
                height: "20px",
                border:
                  paramState.color === hex ? "2px solid teal" : "0 solid black",
                outlineOffset: "2px",
              }}
              onClick={() => updateColorParams(hex, dispatchParams)}
            ></div>
          ))}
          <div className="filter-header">
            <h1>Rating</h1>
            <p onClick={() => clearRatingParams(dispatchParams)}>Clear</p>
          </div>
          <div>
            {[1, 2, 3, 4, 5].map((_, i) =>
              paramState.rating > i ? (
                <AiFillStar
                  key={i}
                  style={{
                    fontSize: "20px",
                  }}
                  onClick={() => updateRatingParams(i + 1, dispatchParams)}
                  onMouseLeave={() => setHover({ state: false, end: 0 })}
                />
              ) : (
                <AiOutlineStar
                  key={i}
                  style={{
                    fontSize: "20px",
                    color: hover.state && i <= hover.end ? "tomato" : "",
                  }}
                  onClick={() => updateRatingParams(i + 1, dispatchParams)}
                  onMouseEnter={() => setHover({ state: true, end: i })}
                  onMouseLeave={() => setHover({ state: false, end: 0 })}
                />
              )
            )}
          </div>
          <div className="filter-header">
            <p style={{ fontSize: "small" }}>
              <i>Reset filters when visit homepage</i>
            </p>
            <input
              type="checkbox"
              checked={filterResetPreference}
              onChange={() =>
                dataDispatch({ type: "TOGGLE_FILTER_RESET_PREFERENCE" })
              }
            />
          </div>
          <Button
            className="Button"
            variant="dark"
            onClick={() => clearAllParams(dispatchParams)}
          >
            Clear Filter
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
