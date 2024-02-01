import { Link } from "react-router-dom";

function ShowProducts({ state, visibleProducts }) {
  return (
    <div className="show-products">
      {state.items.slice(0, visibleProducts).map((item) => (
        <Link to={`/products/${item.id}`} className="card">
          <div className="image-style">
            <img src={URL.createObjectURL(item.image)} alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-price">{item.price}$</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ShowProducts;
