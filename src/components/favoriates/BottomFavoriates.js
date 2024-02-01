import React from "react";
import { Link } from "react-router-dom";

function BottomFavoriates({ dispatch }) {
  const clearAll = () => {
    dispatch({ type: "CLEAR_FAV" });
  };
  return (
    <div className="bottom-favoriates">
      <Link to="/products" className="go-to-another-page">
        Show All Products
      </Link>

      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

export default BottomFavoriates;
