import React from 'react'
import {Link} from'react-router-dom'
import {useAuth} from "./AuthContext";
import { Helmet} from "react-helmet-async";

const Nothing = () => {
    const {loggedIn} = useAuth();
  return loggedIn ? (
    <div>
                 <Helmet>
        <title>Nothing</title>
        <meta name="description" content="Number of items"/>
        <link rel="canonical" href="/Nothing" />
      </Helmet>
        <h1>Nothing</h1>
        <Link to="/">Back to homepage</Link>

    </div>
  ) : (
    <section>
<h1> Not logged in</h1>
<pp>go back to home and log in</pp>
    </section>
  );
}

export default Nothing