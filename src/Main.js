import React from "react";
import { NavLink } from "react-router-dom";
// import Nested from './Nested';
import { Helmet } from "react-helmet-async";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Number of items" />
        <link rel="canonical" href="/Nothing" />
      </Helmet>
      <h1>Altschool Africa Exam</h1>
      <navBar>
      <nav>
      <NavLink
        to="/"
        // style={({ isActive }) =>
        //   isActive ? activeStyle : undefined
        // }
      >
        Home
      </NavLink>
      </nav>
      <nav>
      <NavLink
        to="/Home"
        // style={({ isActive }) =>
        //   isActive ? activeStyle : undefined
        // }
      >
        Homepage
      </NavLink>
      </nav>
      <nav>
      <NavLink
        to="Nested"
        // style={({ isActive }) =>
        //   isActive ? activeStyle : undefined
        // }
      >
        Nested Route
      </NavLink>
      </nav>
      <nav>
      <NavLink
        to="Users"
        // style={({ isActive }) =>
        //   isActive ? activeStyle : undefined
        // }
      >
        Users
      </NavLink>
      </nav>
      <nav>
      <NavLink
        to="Nothing"
        // style={({ isActive }) =>
        //   isActive ? activeStyle : undefined
        // }
      >
        Nothing
      </NavLink>
      </nav>
      <nav>
      <NavLink
        to="ErrorDisplay"
        // style={({ isActive }) =>
        //   isActive ? activeStyle : undefined
        // }
      >
        Error Boundary
      </NavLink>
      </nav>
      </navBar>
    </div>
  );
};

export default Main;
