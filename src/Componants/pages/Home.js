import React, { useState, useEffect } from "react";
import { nurseLogin } from "../../http";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

// import {useDispatch} from 'react-redux';
// import { setUser } from "../../store/UserSlice";

import Form from "react-bootstrap/Form";
import { setUser } from "../../store/UserSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () => {
    let login = localStorage.setItem("login", true);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernamerr, setUsernameerr] = useState("");
  const [passworderr, setPassworderr] = useState("");


  async function loginHandler(e) {
    e.preventDefault();

    if (username === "" || password === "") {
      return alert("type correct values");
    }

    try {
      const result = await nurseLogin({
        username: username,
        password: password,
      });
      console.log(result);
      navigate("/hospitals");
      dispatch(setUser(result.data.user));
    } catch (error) {
      console.log(error.response.status);
      alert("Username/Password is incorrect.")
    }
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUsernameerr(true);
    } else {
      setUsernameerr(false);
    }
    setUsername(item);
  }
  function passHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassworderr(true);
    } else {
      setPassworderr(false);
    }
    setPassword(item);
  }
  return (
    <>
      <h1
        style={{
          fontSize: "100px",
          backgroundColor: "pink",
          fontFamily: "Bold",
        }}
      >
        SHAN APP
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="username"
            onChange={userHandler}
          />
        </Form.Group>{" "}
        {usernamerr ? <span>User Not Valid</span> : ""}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            onChange={passHandler}
          />
        </Form.Group>
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
      </Form>
    </>
  );
};
