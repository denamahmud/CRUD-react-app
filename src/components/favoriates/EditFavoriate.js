import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { useAppContext } from "../AppContext";

function EditFavoriate({ item, setEdit }) {
  const { state, dispatch } = useAppContext();

  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [desc, setDesc] = useState(item.desc);
  const [selectedImage, setSelectedImage] = useState(
    URL.createObjectURL(item.image)
  );

  const isFormValid = title && price && desc && selectedImage;

  const handleUpdateItem = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: {
          ...state,
          id: item.id,
          title: title,
          price: price,
          desc: desc,
          image: selectedImage,
        },
      });
      alert("Item updated successfully");
    } else {
      alert("Please fill all fields");
    }
    setEdit(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      localStorage.setItem("image", file);
    }
  };

 
  return (
    <form className="form-content-edit" onSubmit={handleUpdateItem}>
      <input
        defaultValue={item.title}
        className="input-style-edit"
        type="text"
        placeholder="*Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        defaultValue={item.price}
        className="input-style-edit"
        type="text"
        placeholder="*Price"
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        defaultValue={item.desc}
        className="input-style-edit"
        type="text"
        placeholder="*Description"
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <div className="upload-image">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        <div
          className="upload-style"
          onClick={() => document.getElementById("imageInput").click()}
        >
          {item.image ? (
            <FaCameraRetro className="icon-camera" />
          ) : (
            <div>
              <img
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                  objectFit: "cover",
                }}
                src={URL.createObjectURL(item.image)}
              />
            </div>
          )}
        </div>
        {selectedImage && (
          <label style={{fontSize: '12px'}} className="image-name"> {selectedImage.name}</label>
        )  }
      </div>

      <input
        className={`btn ${isFormValid ? "" : "invisible"}`}
        type="submit"
        value="Update"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default EditFavoriate;
