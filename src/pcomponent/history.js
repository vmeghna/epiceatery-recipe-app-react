import "./style/history.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const History = ({ query, setQuery, handleSubmit, history }) => {
  return (
    <div className="history section">
      <h2>Search History</h2>
      <div className="history-container">
        {history.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="history-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search">
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};
export default History;
