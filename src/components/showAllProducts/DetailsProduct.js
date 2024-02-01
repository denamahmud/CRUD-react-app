import { FaHeart } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import { useParams } from "react-router-dom";

function DetailsProduct() {
  const { state, dispatch, sucessMsg, setSucessMsg } = useAppContext();
  const { id } = useParams();

  const product = state.items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const addToFavList = (product) => {
    if (state.fav.includes(product) && state.items.includes(product)) {
      product.qty = product.qty + 1;
      alert(
        "Item added to your favoriates" + " " + product.qty + " " + "times"
      );
    } else {
      setSucessMsg(true);
      dispatch({ type: "ADD_FAV", payload: product });
      setTimeout(() => {
        setSucessMsg(false);
      }, 5000);
    }
  };
  return (
    <div className="details-content">
      {sucessMsg && <div className="success-msg">Product in wishlist now</div>}
      <div className="image-details">
        <img src={URL.createObjectURL(product.image)} />
      </div>
      <div className="details-desc-style">
        <h3 className="title-product">{product.title}</h3>
        <p className="price-product">{product.price}$</p>
        <p className="desc-product">{product.desc}</p>
        <FaHeart
          className="icon heart-icon"
          onClick={() => addToFavList(product)}
        />
      </div>
    </div>
  );
}

export default DetailsProduct;
