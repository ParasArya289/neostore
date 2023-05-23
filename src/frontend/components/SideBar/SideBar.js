import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export const SideBar = ({showSidebar,handleClose}) => {
  return (
    <>
      <Offcanvas show={showSidebar} onHide={handleClose}>
        
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Button>Clear Filter</Button>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
};
