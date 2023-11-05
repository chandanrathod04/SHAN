import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginProtected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    let login = localStorage.getItem("auth");
    let data = JSON.parse(login);
    setAuth(data?.isAuth);
  }, []);

  if (isAuth) {
    return <Navigate to="/hospitals" />;
  }

  return <Component />;
};
