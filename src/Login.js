import React from "react";
// import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { login, logout, loggedIn } = useAuth();
  // console.log(login);
  return loggedIn ? (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login page" />
        <link rel="canonical" href="/Login" />
      </Helmet>
      <h1>Welcome</h1>
      <p>This is my exam</p>
      <p>Please explore</p>
      <p>opps Sorry no css</p>
      <button onClick={logout}>click here to log out</button>
    </div>
  ) : (
    <div>
      <button onClick={login}>click here to log in</button>
    </div>
  );
};

export default Login;
