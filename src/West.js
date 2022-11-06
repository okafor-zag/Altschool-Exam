import React from "react";
import { Helmet } from "react-helmet-async";

const Nest = () => {
  return (
    <div>
      <Helmet>
        <title>tiny page</title>
        <meta name="description" content="Number of items" />
        <link rel="canonical" href="/West" />
      </Helmet>
      <h1>Nest</h1>
      <p>this is a nested route</p>
    </div>
  );
};

export default Nest;
