import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { adminLogin } from "../../http";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const Admin = () => {
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!phone || !password) {
      alert("incomplete fields");
      return;
    }

    try {
      const { data } = await adminLogin({ phone, password });
      dispatch(setAuth(data));
      navigate("/DatabaseNurse");
    } catch (e) {
      alert("Enter valid Phone number and password");
      console.log(e);
    }
  };

  return (
    <>
      <h1>Admin Page</h1>
      <Form style={{ width: "41%", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your phone number with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <div className="mb-2">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};
export default Admin;
