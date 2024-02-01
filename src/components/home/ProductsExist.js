import { Link } from "react-router-dom";

function ProductsExist({ state }) {
  return (
    <div className="content">
      <h3 className="heading">Hi!</h3>
      <p className="paragraph">There are {state.items.length} prodcuts</p>
      <Link to="/products" className="btn">
        Show all poducts
      </Link>
    </div>
  );
}

export default ProductsExist;
