import { Link } from "react-router-dom";

function ProductsNotExist() {
  return (
    <div className="content">
      <h3 className="heading">Hi!</h3>
      <p className="paragraph">There is no products</p>
      <Link className="btn" to="add-new">
        Add new
      </Link>
    </div>
  );
}

export default ProductsNotExist;
