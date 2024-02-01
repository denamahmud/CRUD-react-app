import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import AddNewProducts from "./pages/addNewProducts/AddNewProducts";
import ShowAllProducts from "./pages/showAllProducts/ShowAllProducts";
import SingleProduct from "./pages/showAllProducts/SingleProduct";
import Favoriates from "./pages/favoriates/Favoriates";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-new" element={<AddNewProducts />} />
          <Route exact path="/products" element={<ShowAllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/favoriates" element={<Favoriates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
