import { useContext, useEffect,useState } from "react";
import "./SideBar.css";
import { Button, Offcanvas } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { dataContext } from "../../contexts/dataContext";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { uniqueColors } from "../../utils/unqiueColors";
import { formatCurrency } from "../../utils/formatCurrency";

let initState = {
  category: [],
  sort: [],
  rating: [],
  price:[]
};
export const SideBar = ({ showSidebar, handleClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hover, setHover] = useState({
    state: false,
    end: 0,
  });
  const { products, categories } = useContext(dataContext);

  const colors = uniqueColors(products);

  const formatedPrice = formatCurrency(`${searchParams.get("price") || 0}`,"INR")
  /**
   * on hard refresh if params are available, then set those params
   * @searchParams is present in url, then get all of the params,
   * @getAll returns array of params, if no params available then empty array is returned which is interpreted by useSearchParam as "not present".
   */

  useEffect(() => {
    initState = {
      category: searchParams.getAll("category"),
      sort: searchParams.getAll("sort"),
      rating: searchParams.getAll("rating"),
      color: searchParams.getAll("color"),
      price: searchParams.get("price")?searchParams.get("price"):"150000",
    };
    updatePriceParams(initState.price)
  }, []);

  //functions to update individual filter params
  const updatePriceParams = (price) => {
    initState = {
      ...initState,
      price
    };
    setSearchParams((p) => createSearchParams(initState));
  };
  const updateCategoryParams = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      initState = {
        ...initState,
        category: [...searchParams.getAll("category"), name],
      };
      setSearchParams((p) => createSearchParams(initState));
    } else {
      initState = {
        ...initState,
        category: searchParams.getAll("category").filter((c) => c !== name),
      };
      setSearchParams((p) => createSearchParams(initState));
    }
  };

  const updateSortParams = (event) => {
    const { value } = event.target;
    initState = {
      ...initState,
      sort: value,
    };
    setSearchParams((p) => createSearchParams(initState));
  };

  const updateColorsParams = (color) => {
    initState = {
      ...initState,
      color,
    };
    setSearchParams((p) => createSearchParams(initState));
  };

  const updateRatingParams = (rating) => {
    initState = {
      ...initState,
      rating,
    };
    setSearchParams((p) => createSearchParams(initState));
  };

  //functions to clear individual filter params
  const clearPriceParams = () => {
    initState = { ...initState, price: 150000 };
    setSearchParams(createSearchParams(initState));
  };
  const clearCategoryParams = () => {
    initState = { ...initState, category: [] };
    setSearchParams(createSearchParams(initState));
  };
  const clearSortParams = () => {
    initState = { ...initState, sort: [] };
    setSearchParams(createSearchParams(initState));
  };
  const clearColorParams = () => {
    initState = { ...initState, color: [] };
    setSearchParams(createSearchParams(initState));
  };
  const clearRatingParams = () => {
    initState = { ...initState, rating: [] };
    setSearchParams(createSearchParams(initState));
  };
  return (
    <>
      <Offcanvas className="offcanvas" show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="filter-header">
            <h1>Price</h1>
            <p onClick={clearPriceParams}>Clear</p>
          </div>
          <p>{formatedPrice}</p>
          <input
            className="filter-range"
            type="range"
            min="0"
            max="150000"
            step={"5000"}
            value={searchParams.get("price") || 0}
            onChange={(e)=>updatePriceParams(e.target.value)}
          />
          <div className="filter-header">
            <h1>Sort</h1>
            <p onClick={clearSortParams}>Clear</p>
          </div>
          <div className="filter-section">
            <label>High To Low</label>
            <input
              type="radio"
              name="sort"
              value="HTL"
              checked={
                searchParams.has("sort") &&
                searchParams.getAll("sort").includes("HTL")
              }
              onChange={updateSortParams}
            />
          </div>
          <div className="filter-section">
            <label>Low To High</label>
            <input
              type="radio"
              name="sort"
              value="LTH"
              checked={
                searchParams.has("sort") &&
                searchParams.getAll("sort").includes("LTH")
              }
              onChange={updateSortParams}
            />
          </div>
          <div className="filter-header">
            <h1>Category</h1>
            <p onClick={clearCategoryParams}>Clear</p>
          </div>
          {categories.map(({ id, name, category }) => (
            <div key={id} className="filter-section">
              <label>{name}</label>
              <input
                type="checkbox"
                name={category}
                checked={
                  searchParams.has("category") &&
                  searchParams.getAll("category").includes(category)
                }
                onChange={updateCategoryParams}
              />
            </div>
          ))}
          <div className="filter-header">
            <h1>Colors</h1>
            <p onClick={clearColorParams}>Clear</p>
          </div>
          {colors.map((hex) => (
            <div
              className="prodcard-clr"
              style={{
                backgroundColor: hex,
                width: "20px",
                height: "20px",
                border:
                  searchParams.get("color") === hex
                    ? "2px solid teal"
                    : "0 solid black",
                outlineOffset: "2px",
              }}
              onClick={() => updateColorsParams(hex)}
            ></div>
          ))}
          <div className="filter-header">
            <h1>Rating</h1>
            <p onClick={clearRatingParams}>Clear</p>
          </div>
          <div>
            {[1, 2, 3, 4, 5].map((_, i) =>
              searchParams.get("rating") > i ? (
                <AiFillStar
                  key={i}
                  style={{
                    fontSize: "20px",
                  }}
                  onClick={() => updateRatingParams(i + 1)}
                  onMouseLeave={() => setHover({ state: false, end: 0 })}
                />
              ) : (
                <AiOutlineStar
                  key={i}
                  style={{
                    fontSize: "20px",
                    color: hover.state && i <= hover.end ? "tomato" : "",
                  }}
                  onClick={() => updateRatingParams(i + 1)}
                  onMouseEnter={() => setHover({ state: true, end: i })}
                  onMouseLeave={() => setHover({ state: false, end: 0 })}
                />
              )
            )}
          </div>
          <Button className="Button" variant="dark">
            Clear Filter
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
