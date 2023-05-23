import { useContext, useState } from "react";
import "./SideBar.css";
import { Button, Offcanvas } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { dataContext } from "../../contexts/dataContext";
export const SideBar = ({ showSidebar, handleClose }) => {
  const [rating, setRating] = useState(0);
  const { categories } = useContext(dataContext);
  return (
    <>
      <Offcanvas className="offcanvas" show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <label>
            Price
            <input type="range" min="0" max="150000" />
          </label>
          <label>
            Category
            {categories.map(({ id, name }) => (
              <label key={id}>
                <input type="checkbox" />
                {name}
              </label>
            ))}
          </label>
          <label>
            Rating
            <div>
              {Array(5)
                .fill(0)
                .map((_, i) =>
                  rating > i ? <AiFillStar key={i} onClick={()=>setRating(i+1)}/> : <AiOutlineStar key={i} onClick={()=>setRating(i+1)}/>
                )}
            </div>
          </label>
          <Button className="Button" variant="dark">
            Clear Filter
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
