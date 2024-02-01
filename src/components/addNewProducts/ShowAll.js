import { Link } from "react-router-dom";

function ShowAll({ image, state }) {
  return (
    <div className="image-container">
      <div className="image-content">
        <img src={image} alt="" />
      </div>

      <div className="number-container">
        <Link to="/products" className="show-all-products">
          Show all products
        </Link>
        {state.items.length > 0 && (
          <span className="number-items">{state.items.length}</span>
        )}
      </div>
    </div>
  );
}

export default ShowAll;
