import { Link } from "react-router-dom";
import "./AddNewProducts.scss";
import image from "../../imgs/add-to-cart.png";
import { useState } from "react";
import { useAppContext } from "../../components/AppContext";
import FormAddNew from "../../components/addNewProducts/FormAddNew";
import ShowAll from "../../components/addNewProducts/ShowAll";

function AddNewProducts() {
  const { state, dispatch, sucessMsg, setSucessMsg } = useAppContext();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title: title,
      price: price,
      desc: desc,
      image: selectedImage,
      qty: 1,
    };

    dispatch({ type: "ADD_ITEM", payload: newItem });

    if (newItem) {
      setSucessMsg(true);
      setTitle("");
      setPrice("");
      setDesc("");
      setSelectedImage(null);
    }
    setTimeout(() => {
      setSucessMsg(false);
    }, 5000);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
      localStorage.setItem("image", file);
    }
  };

  return (
    <div className="add-container">
      {sucessMsg && (
        <div className="success-msg">Product added successfully</div>
      )}
      <div className="add-content">
        <FormAddNew
          handleAddItem={handleAddItem}
          title={title}
          setTitle={setTitle}
          price={price}
          setPrice={setPrice}
          desc={desc}
          setDesc={setDesc}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleImageChange={handleImageChange}
        />

        <ShowAll image={image} state={state} />
      </div>
    </div>
  );
}

export default AddNewProducts;
