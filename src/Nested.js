import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import {useAuth} from "./AuthContext";
import { Helmet} from "react-helmet-async";
// import Home from './Home'

const Nested = () => {
  const {loggedIn} = useAuth();
  return loggedIn ? (
    <div>
          <Helmet>
        <title>Items</title>
        <meta name="description" content="Number of items"/>
        <link rel="canonical" href="/Nested" />
      </Helmet>
      <h1>Nested</h1>
      <p>not much content here</p>
      <Link to="West">click to see the nested route</Link>
      <Outlet />
    </div>
  ) : (
    <section>
<h1> Not logged in</h1>
<pp>go back to home and log in</pp>
    </section>
  );
}

export default Nested;