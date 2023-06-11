import { useRef, useState } from "react";
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

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const localityRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const countryRef = useRef(null);
  const pincodeRef = useRef(null);

  const {
    dataState: { address },
    dataDispatch,
  } = useData();

  const handleClose = () => {
    setUpdateAddress(false);
    setShow(false);
    setValidated(false);
  };

  // const fillFormWithExistingAddress = () => {

  // };

  const createFormData = () => {
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());
    // values["id"] = address.length + 1;
    return values;
  };

  const addAddressSubmitHandler = () => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        const values = createFormData();
        setValidated(false);
        dataDispatch({ type: "ADD_ADDRESS", payload: values });
        handleClose();
        toast.success("Address Added", { id: "toast" });
      } else {
        setValidated(true);
      }
    }
  };
  const updateAddressSubmitHandler = () => {
    toast.success("Address Updated", { id: "toast" });
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        const values = createFormData();
        setValidated(false);
        dataDispatch({
          type: "UPDATE_ADDRESS",
          payload: {
            id: addressId,
            address: { id: addressId, ...values },
          },
        });
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
              autoFocus
              required
            />

            <Form.Control
              ref={localityRef}
              className="mb-3"
              type="text"
              name="locality"
              placeholder="Locality eg, house no, street"
              required
            />

            <Form.Control
              ref={cityRef}
              className="mb-3"
              type="text"
              name="city"
              placeholder="City"
              required
            />

            <Form.Control
              ref={stateRef}
              className="mb-3"
              type="text"
              name="state"
              placeholder="State"
              required
            />
            <Form.Control
              ref={countryRef}
              className="mb-3"
              type="text"
              name="country"
              placeholder="Country"
              required
            />
            <Form.Control
              ref={pincodeRef}
              className="mb-3"
              type="number"
              name="pincode"
              placeholder="Pincode"
              required
            />
            <Form.Control
              ref={pincodeRef}
              className="mb-3"
              type="number"
              name="mobile"
              placeholder="Mobile Number"
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
