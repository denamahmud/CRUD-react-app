import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import EditFavoriate from "./EditFavoriate";

function ShowFavoriates({ state, dispatch, edit, setEdit }) {
  const editClick = (data) => {
    setEdit(data);
  };
  const closeEdit = () => {
    setEdit(null);
  };

  const removeItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <>
      {state.fav.map((item, index) => {
        return (
          <div className="card-fav" key={index}>
            <div className="card-container">
              {edit === item ? (
                <EditFavoriate item={item} setEdit={setEdit} />
              ) : (
                <div className="card-content">
                  <h3 className="fav-title">{item.title}</h3>
                  <p className="fav-price">{item.price}$</p>
                  <p className="fav-desc"> {item.desc}</p>
                  <p className="qty-product">
                    {" "}
                    {item.qty > 1 && `x${item.qty}`}
                  </p>
                  <div className="fav-image">
                    <img src={URL.createObjectURL(item.image)} />
                  </div>
                </div>
              )}
            </div>
            <div className="btn-container">
              {edit ? (
                <FaTimes className="icon" onClick={closeEdit} />
              ) : (
                <FaPencilAlt className="icon" onClick={() => editClick(item)} />
              )}
              <FaTrash className="icon" onClick={() => removeItem(item.id)} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShowFavoriates;
