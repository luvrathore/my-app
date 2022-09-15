import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1> Page Not Found 404 </h1>
      <Link to="/"> Back to Home </Link>
    </div>
  );
}

export default PageNotFound;
