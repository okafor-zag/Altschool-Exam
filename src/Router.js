import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ErrorDisplay from "./ErrorDisplay";
import ErrorPage from "./ErrorPage";
import { HelmetProvider } from "react-helmet-async";
import Main from "./Main";
import Nested from "./Nested";
import Login from "./Login";
import Users from "./Users";
import Nothing from "./Nothing";
import Nest from "./West";

export const UnAuthenticatedRoutes = () => {
    const handleClick = (e) => {
        e.preventDefault();
    }
  return (
    <section>
      <HelmetProvider>
        <Main />
        <Routes>
          <Route path="/Home" element={<Home onClick={handleClick} />} />
          <Route path="/" element={<Login  onClick={handleClick}  />} />
          <Route path="*" element={<ErrorPage   />} />
          <Route path="/ErrorDisplay" element={<ErrorDisplay  onClick={handleClick}  />} />
          <Route path="/Nested" element={<Nested  onClick={handleClick}  />}>
            <Route path="West" element={<Nest  onClick={handleClick}  />} />
          </Route>
          <Route path="/Nothing" element={<Nothing  onClick={handleClick} />} />
          <Route path="/Users" element={<Users  onClick={handleClick}  />} />
        </Routes>
      </HelmetProvider>
    </section>
  );
};
