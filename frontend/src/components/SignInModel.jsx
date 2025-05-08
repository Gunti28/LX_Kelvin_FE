

import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Logo from "../assets/Logo1.svg";
import FooterImg from "../assets/footerimg.jpg";
import "../css/Model.css";
// import Form from 'react-bootstrap/Form';
import { Form, Button, Container } from "react-bootstrap";

function SignInModel({ show, onClose, onCreateAccount }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    onCreateAccount(); 
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      size="medium"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={Logo} width={150} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column  body ">
        <div className="text-center">
          <p className="fs-5 texting ">Experience the Taste of Real Organic</p>
          <p className="textingsmall">Login or SignUp</p>
        </div>
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter phone number or email... "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{borderColor: 'black', boxShadow: 'none' }}
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mt-3 mb-2" >
              Continue
            </Button>
          </Form>

          {/* <Button variant="warning" onClick={onCreateAccount} width={100} >
          Create Account
        </Button> */}
        </Container>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          className="image-fluid w-100 "
          style={{ objectFit: "cover" }}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModel;
