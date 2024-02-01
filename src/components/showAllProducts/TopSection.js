import { MdAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopSection({ state }) {
  return (
    <div className="top-section">
      <h3 className="title-page">All products</h3>
      <div>
        <Link to="/add-new">
          <MdAdd className="icon add-icon" />
        </Link>
        {state.fav.length > 0 && (
          <>
            <span className="number">{state.items.length}</span>
            <Link to="/favoriates">
              <FaHeart className="icon heart-icon" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default TopSection;
