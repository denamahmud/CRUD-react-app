import { useState } from "react";
import ProductsExist from "../../components/home/ProductsExist";
import ProductsNotExist from "../../components/home/ProductsNotExist";
import "./Home.scss";
import { useAppContext } from "../../components/AppContext";

function Home() {
  const { state } = useAppContext();
  const [isExist, setIsExist] = useState(state.items.length > 0 ? true : false);

  return (
    <div className="home-container">
      {isExist ? <ProductsExist state={state} /> : <ProductsNotExist />}
    </div>
  );
}

export default Home;
