import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-hot-toast";
import { useData } from "../../contexts/dataContext";

function AddressModal({
  show,
  setShow,
  updateAddress,
  setUpdateAddress,
  addressId,
}) {
  const [validated, setValidated] = useState(false);
  const [controlledValue, setControlledValue] = useState({});

  const {
    dataState: { address, selectedAddress },
    dataDispatch,
  } = useData();

  const formRef = useRef(null);

  useEffect(() => {
    if (updateAddress) {
      const currentAddress = address.find(({ id }) => id === addressId);
      setControlledValue(currentAddress);
      return;
    }
    setControlledValue({});
  }, [addressId, updateAddress]);

  const formValue = (e) => {
    const { name, value } = e.target;
    setControlledValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setUpdateAddress(false);
    setShow(false);
    setValidated(false);
  };

  const addAddressSubmitHandler = () => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        setValidated(false);
        dataDispatch({ type: "ADD_ADDRESS", payload: controlledValue });
        handleClose();
        toast.success("Address Added", { id: "toast" });
      } else {
        setValidated(true);
      }
    }
  };
  const updateAddressSubmitHandler = () => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        setValidated(false);
        dataDispatch({
          type: "UPDATE_ADDRESS",
          payload: {
            id: addressId,
            address: { id: addressId, ...controlledValue },
          },
        });
        if (selectedAddress?.id === addressId) {
          dataDispatch({ type: "ACTIVE_ADDRESS", payload: controlledValue });
        }
        toast.success("Address Updated", { id: "toast" });
        handleClose();
      } else {
        setValidated(true);
      }
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {updateAddress ? "Update Address" : "Add Address"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formRef} noValidate validated={validated}>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Full Name"
              name="name"
              value={controlledValue?.name}
              onChange={(e) => formValue(e)}
              autoFocus
              required
            />

            <Form.Control
              className="mb-3"
              type="text"
              name="locality"
              placeholder="Locality eg, house no, street"
              value={controlledValue?.locality}
              onChange={(e) => formValue(e)}
              required
            />

            <Form.Control
              className="mb-3"
              type="text"
              name="city"
              placeholder="City"
              value={controlledValue?.city}
              onChange={(e) => formValue(e)}
              required
            />

            <Form.Control
              className="mb-3"
              type="text"
              name="state"
              placeholder="State"
              value={controlledValue?.state}
              onChange={(e) => formValue(e)}
              required
            />
            <Form.Control
              className="mb-3"
              type="text"
              name="country"
              placeholder="Country"
              value={controlledValue?.country}
              onChange={(e) => formValue(e)}
              required
            />
            <Form.Control
              className="mb-3"
              type="number"
              name="pincode"
              placeholder="Pincode"
              value={controlledValue?.pincode}
              onChange={(e) => formValue(e)}
              required
            />
            <Form.Control
              className="mb-3"
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              value={controlledValue?.mobile}
              onChange={(e) => formValue(e)}
              required
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {updateAddress ? (
            <Button variant="dark" onClick={updateAddressSubmitHandler}>
              Update
            </Button>
          ) : (
            <Button variant="dark" onClick={addAddressSubmitHandler}>
              Save
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddressModal;
