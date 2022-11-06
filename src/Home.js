import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/');
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="website homepage"/>
        <link rel="canonical" href="/shop" />
      </Helmet>
      <h1>Login to see project</h1>
      <button onClick={navigateToLogin}> click here to log in</button>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
