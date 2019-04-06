import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div>
      <h1> Sorry, this page doesnt exist</h1>
      <Link to="/" className="btn btn-danger btn-lg">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
