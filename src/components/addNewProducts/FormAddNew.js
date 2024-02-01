import { FaCameraRetro } from "react-icons/fa";

function FormAddNew({
  handleAddItem,
  title,
  setTitle,
  price,
  setPrice,
  desc,
  setDesc,
  selectedImage, 
  handleImageChange,
}) {
  const isFormValid = title && price && desc && selectedImage;

  return (
    <form className="form-content" onSubmit={handleAddItem}>
      <h3 className="title-page">Add New Product</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-style"
        type="text"
        placeholder="*Title"
        required
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-style"
        type="text"
        placeholder="*Price"
        required
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="input-style"
        type="text"
        placeholder="*Description"
        required
      />
      <div className="upload-image">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          required
        />
        <div
          className="upload-style"
          onClick={() => document.getElementById("imageInput").click()}
        >
          {selectedImage ? (
            <div>
              <img
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                  objectFit: "cover",
                }}
                src={URL.createObjectURL(selectedImage)}
              />
            </div>
          ) : (
            <FaCameraRetro className="icon-camera" />
          )}
        </div>

        {selectedImage ? (
          <label className="image-name"> {selectedImage.name}</label>
        ) : (
          <label htmlFor="imageInput" className="image-name">
            Select Image
          </label>
        )}
      </div>
      <input
        type="submit"
        value="Add"
        className={`btn btn-margin ${isFormValid ? '' : 'invisible'}`}
        disabled={!isFormValid}
      />
    </form>
  );
}

export default FormAddNew;
