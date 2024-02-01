import React from "react";
import { Link } from "react-router-dom";

function BottomDetails() {
  return (
    <div className="bottom-details">
      <Link to="/products" className="go-to-another-page">
        Show all products
      </Link>
      <Link to="/favoriates" className="go-to-another-page">
        My wishlist
      </Link>
    </div>
  );
}

export default BottomDetails;
