import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from "./AuthContext"
import { Helmet } from "react-helmet-async";

const Users = () => {
    const { loggedIn } = useAuth();
  return loggedIn? (
  <section>
    <Helmet>
        <title>Home</title>
        <meta name="description" content="Number of users"/>
        <link rel="canonical" href="/Users" />
      </Helmet>
    <div>Users</div>
    <p>not much to see here</p>
    <Link to="/">Back to homepage</Link>
  </section>
    
  ) :  (
    <section>
<h1> Not logged in</h1>
<pp>go back to home and log in</pp>
    </section>
  );
}

export default Users;