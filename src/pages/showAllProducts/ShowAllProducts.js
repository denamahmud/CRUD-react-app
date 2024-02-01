import { useState } from "react";
import { useAppContext } from "../../components/AppContext";
import ShowProducts from "../../components/showAllProducts/ShowProducts";
import TopSection from "../../components/showAllProducts/TopSection";
import "./ShowAllProducts.scss";

function ShowAllProducts() {
  const { state } = useAppContext();
  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };
  return (
    <div className="show-all-products">
      <div className="container">
        <TopSection state={state} />
        <ShowProducts state={state} visibleProducts={visibleProducts} />
        {state.items.length > 3 && (
          <button onClick={showMoreProducts} className="btn">
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default ShowAllProducts;
