import ShowFavoriates from "../../components/favoriates/ShowFavoriates";
import BottomFavoriates from "../../components/favoriates/BottomFavoriates";
import "./Favoriates.scss";
import { useAppContext } from "../../components/AppContext";
import { useState } from "react";

function Favoriates() {
  const { state, dispatch } = useAppContext();
  const [edit, setEdit] = useState(null);
  return (
    <div className="favoriates-container">
      <div className="container">
        <h3 className="title-page">My Favoriates</h3>
        <ShowFavoriates
          state={state}
          dispatch={dispatch}
          setEdit={setEdit}
          edit={edit}
        />
        <BottomFavoriates state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Favoriates;
