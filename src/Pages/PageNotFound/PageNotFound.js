import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h5 className="text-center py-5">404 Page Not Found</h5>
      <p className="text-center mt-3">
        <Link to="/" className="me-3">
          Home
        </Link>
        <Link to="/dashboard/home">Dashboard</Link>
      </p>
    </>
  );
}

export default PageNotFound;
