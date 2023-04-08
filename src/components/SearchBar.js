import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <label>Enter Text</label>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
