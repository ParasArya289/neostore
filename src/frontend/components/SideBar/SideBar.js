import { useContext, useMemo, useState } from "react";
import "./SideBar.css";
import { Button, Offcanvas } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {dataContext } from "../../contexts/dataContext";
export const SideBar = ({ showSidebar, handleClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState({
    state: false,
    end: 0,
  });
  const [activeClr,setActiveClr] = useState('');
  const {products, categories } = useContext(dataContext);

  const uniqueColors = useMemo(()=>{
    const colorsFiltered = products.flatMap(({colors})=>colors)
    return [...new Set(colorsFiltered)]
  },[])

  return (
    <>
      <Offcanvas className="offcanvas" show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="filter-header">
            <h1>Price</h1>
            <p>Clear</p>
          </div>
          <p>₹ 10000</p>
          <input
            className="filter-range"
            type="range"
            min="0"
            max="150000"
            step={"10000"}
          />
          <div className="filter-header">
            <h1>Sort</h1>
            <p>Clear</p>
          </div>
          <div className="filter-section">
            <label>High To Low</label>
            <input type="radio" name="sort-group" />
          </div>
          <div className="filter-section">
            <label>Low To High</label>
            <input type="radio" name="sort-group" />
          </div>
          <div className="filter-header">
            <h1>Category</h1>
            <p>Clear</p>
          </div>
          {categories.map(({ id, name }) => (
            <div className="filter-section">
              <label key={id}>{name}</label>
              <input type="checkbox" />
            </div>
          ))}
          <div className="filter-header">
            <h1>Colors</h1>
            <p>Clear</p>
          </div>
          {
            uniqueColors.map((hex=>(
              <div
            className="prodcard-clr"
            style={{ backgroundColor: hex, width: "20px", height: "20px",border:activeClr===hex?"2px solid teal":"0 solid black",
            outlineOffset:'2px'
          
          }}
            onClick={()=>setActiveClr(hex)}
          ></div>
            )))
          }
          <div className="filter-header">
            <h1>Rating</h1>
            <p>Clear</p>
          </div>
          <div>
            {[1, 2, 3, 4, 5].map((_, i) =>
                rating > i ? (
                  <AiFillStar
                    key={i}
                    style={{
                      color:hover.state && i <= hover.end ? "grey" : "",
                    }}
                    onClick={() => setRating(i + 1)}
                    onMouseEnter={() => setHover({ state: true, end: i })}
                    onMouseLeave={() => setHover({ state: false, end: 0 })}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    style={{
                      color: hover.state && i <= hover.end ? "tomato" : "",
                    }}
                    onClick={() => setRating(i + 1)}
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
